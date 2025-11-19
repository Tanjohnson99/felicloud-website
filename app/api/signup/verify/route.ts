import { NextRequest, NextResponse } from 'next/server';
import { getVerificationToken, markTokenAsVerified, deleteTokensByEmail } from '@/lib/db/email-verifications';
import { createNextcloudUser, checkUserExists } from '@/lib/services/nextcloud';
import { notifyAdminAccountCreated } from '@/lib/services/admin-notifications';

/**
 * POST /api/signup/verify
 * Step 2: Verify token and create Nextcloud account
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token, password, acceptTerms, acceptPrivacy } = body;

    // Validate input
    if (!token || !password) {
      return NextResponse.json(
        { error: 'Token and password are required' },
        { status: 400 }
      );
    }

    // Validate terms acceptance
    if (!acceptTerms || !acceptPrivacy) {
      return NextResponse.json(
        { error: 'You must accept the Terms of Service and Privacy Policy' },
        { status: 400 }
      );
    }

    // Validate password strength (Nextcloud requirements)
    if (password.length < 10) {
      return NextResponse.json(
        { error: 'Password must be at least 10 characters' },
        { status: 400 }
      );
    }
    if (!/[a-z]/.test(password)) {
      return NextResponse.json(
        { error: 'Password must contain at least one lowercase letter' },
        { status: 400 }
      );
    }
    if (!/[A-Z]/.test(password)) {
      return NextResponse.json(
        { error: 'Password must contain at least one uppercase letter' },
        { status: 400 }
      );
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      return NextResponse.json(
        { error: 'Password must contain at least one special character' },
        { status: 400 }
      );
    }

    // Get verification token from database
    let verificationData;
    try {
      verificationData = await getVerificationToken(token);
    } catch (dbError) {
      console.error('Database error getting token:', dbError);
      return NextResponse.json(
        { error: 'Database error. Please try again later.' },
        { status: 500 }
      );
    }

    // Validate token
    if (!verificationData) {
      return NextResponse.json(
        { error: 'Invalid verification token' },
        { status: 400 }
      );
    }

    if (verificationData.verified) {
      return NextResponse.json(
        { error: 'This verification link has already been used' },
        { status: 400 }
      );
    }

    if (new Date() > new Date(verificationData.expires_at)) {
      return NextResponse.json(
        { error: 'This verification link has expired. Please request a new one.' },
        { status: 400 }
      );
    }

    // Check if user already exists in Nextcloud (double-check)
    const userExists = await checkUserExists(verificationData.email);
    if (userExists) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Create user in Nextcloud
    const freeQuotaGB = parseInt(process.env.FREE_ACCOUNT_QUOTA_GB || '10');
    const freeQuotaBytes = freeQuotaGB * 1024 * 1024 * 1024;

    let createResult;
    try {
      createResult = await createNextcloudUser({
        username: verificationData.email, // Use email as username
        password,
        email: verificationData.email,
        displayName: verificationData.full_name,
        quota: freeQuotaBytes,
      });
    } catch (nextcloudError) {
      console.error('Nextcloud user creation error:', nextcloudError);
      return NextResponse.json(
        { error: 'Failed to create account. Please try again later.' },
        { status: 500 }
      );
    }

    if (!createResult.success) {
      console.error('Nextcloud user creation failed:', createResult.message);
      return NextResponse.json(
        { error: createResult.message },
        { status: 500 }
      );
    }

    // Mark token as verified
    try {
      await markTokenAsVerified(token);
    } catch (dbError) {
      console.error('Failed to mark token as verified:', dbError);
      // Don't fail the signup - account is already created
    }

    // Note: We don't send a welcome email for free signups because
    // the user already knows their credentials (they just created them).
    // Welcome emails are only sent for paid accounts with temporary passwords.

    // Send admin notification (don't fail if this fails)
    try {
      await notifyAdminAccountCreated(
        verificationData.full_name,
        verificationData.email,
        new Date(verificationData.created_at),
        `${freeQuotaGB} GB`
      );
    } catch (adminError) {
      console.error('Failed to send admin notification:', adminError);
      // Don't fail - account is created
    }

    // Clean up old tokens for this email (optional, done in background)
    deleteTokensByEmail(verificationData.email).catch((err) => {
      console.error('Failed to cleanup tokens:', err);
    });

    console.log(`Account created successfully for: ${verificationData.email}`);

    return NextResponse.json(
      {
        message: 'Account created successfully',
        email: verificationData.email,
        fullName: verificationData.full_name,
        nextcloudUrl: process.env.NEXTCLOUD_URL,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup verification error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
