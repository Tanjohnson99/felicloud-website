import { NextRequest, NextResponse } from 'next/server';
import { createNextcloudUser, checkUserExists } from '@/lib/services/nextcloud';

/**
 * POST /api/signup
 * Handle user signup (creates Nextcloud account)
 * This route runs on the SERVER - Nextcloud credentials are never exposed
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { username, password, email, displayName } = body;

    // Validate input
    if (!username || !password || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
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

    // Validate username (alphanumeric, 3-20 chars)
    const usernameRegex = /^[a-zA-Z0-9_-]{3,20}$/;
    if (!usernameRegex.test(username)) {
      return NextResponse.json(
        { error: 'Username must be 3-20 alphanumeric characters' },
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

    // Check if user already exists
    const userExists = await checkUserExists(username);
    if (userExists) {
      return NextResponse.json(
        { error: 'Username already taken' },
        { status: 409 }
      );
    }

    // Create user in Nextcloud (server-side only)
    // Free accounts get 10 GB quota by default
    const freeQuotaGB = parseInt(process.env.FREE_ACCOUNT_QUOTA_GB || '10');
    const freeQuotaBytes = freeQuotaGB * 1024 * 1024 * 1024;

    const result = await createNextcloudUser({
      username,
      password,
      email,
      displayName: displayName || username,
      quota: freeQuotaBytes,
    });

    if (!result.success) {
      console.error('Nextcloud user creation failed:', {
        username,
        email,
        error: result.message,
      });
      return NextResponse.json(
        { error: result.message },
        { status: 500 }
      );
    }

    // Note: We don't send a welcome email for free signups because
    // the user already knows their credentials (they just created them).
    // Welcome emails are only sent for paid accounts with temporary passwords.

    return NextResponse.json(
      {
        message: 'Account created successfully',
        username,
        nextcloudUrl: process.env.NEXTCLOUD_URL,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json(
      { error: 'Failed to create account. Please try again later.' },
      { status: 500 }
    );
  }
}
