import { NextRequest, NextResponse } from 'next/server';
import { createVerificationToken, getPendingTokenByEmail } from '@/lib/db/email-verifications';
import { checkUserExists } from '@/lib/services/nextcloud';
import { sendVerificationEmail } from '@/lib/services/email';
import { notifyAdminSignupRequest } from '@/lib/services/admin-notifications';
import { rateLimiters } from '@/lib/utils/rate-limit';

/**
 * POST /api/signup/request
 * Step 1: Request account creation (send verification email)
 *
 * Security: Rate limited to 3 requests per hour per IP
 */
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting (3 requests per hour)
    const rateLimitResult = await rateLimiters.signup.check(request);
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { error: rateLimitResult.error },
        { status: 429 }
      );
      rateLimiters.signup.addHeaders(response.headers, rateLimitResult);
      return response;
    }

    const body = await request.json();
    const { fullName, email } = body;

    // Validate input
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Full name and email are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate full name (at least 2 characters)
    if (fullName.trim().length < 2) {
      return NextResponse.json(
        { error: 'Full name must be at least 2 characters' },
        { status: 400 }
      );
    }

    // Check if user already exists in Nextcloud
    const userExists = await checkUserExists(email);
    if (userExists) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    // Check if there's already a pending verification token for this email
    const existingToken = await getPendingTokenByEmail(email);
    if (existingToken) {
      // Token already exists and hasn't expired
      // Resend the verification email with the same token
      console.log(`Resending verification email for: ${email}`);

      try {
        await sendVerificationEmail(email, fullName, existingToken.token);
      } catch (emailError) {
        console.error('Failed to resend verification email:', emailError);
        return NextResponse.json(
          { error: 'Failed to send verification email. Please try again later.' },
          { status: 500 }
        );
      }

      return NextResponse.json(
        {
          message: 'Verification email resent successfully',
          email,
        },
        { status: 200 }
      );
    }

    // Get IP address for logging
    const ipAddress = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown';

    // Create verification token
    let verificationToken;
    try {
      verificationToken = await createVerificationToken(
        email,
        fullName,
        ipAddress
      );
    } catch (dbError) {
      console.error('Failed to create verification token:', dbError);
      return NextResponse.json(
        { error: 'Database error. Please try again later.' },
        { status: 500 }
      );
    }

    // Send verification email to user
    try {
      await sendVerificationEmail(email, fullName, verificationToken.token);
    } catch (emailError) {
      console.error('Failed to send verification email:', emailError);
      return NextResponse.json(
        { error: 'Failed to send verification email. Please try again later.' },
        { status: 500 }
      );
    }

    // Send notification to admin (don't fail if this fails)
    try {
      await notifyAdminSignupRequest(fullName, email, ipAddress);
    } catch (adminError) {
      console.error('Failed to send admin notification:', adminError);
      // Continue anyway - this shouldn't block the signup
    }

    console.log(`Verification email sent successfully for: ${email}`);

    return NextResponse.json(
      {
        message: 'Verification email sent successfully',
        email,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup request error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}
