import { NextRequest, NextResponse } from 'next/server';
import { checkUserExists } from '@/lib/services/nextcloud';

/**
 * POST /api/auth/check-email
 *
 * Checks if an email/username exists in Nextcloud
 * Used during checkout to determine if user is upgrading or creating new account
 *
 * Request body:
 * {
 *   "email": "user@example.com"
 * }
 *
 * Response:
 * {
 *   "exists": boolean,
 *   "email": string,
 *   "accountType": "free" | "paid" | null  // null if doesn't exist
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if user exists in Nextcloud
    // We use email as username in Nextcloud
    const exists = await checkUserExists(email);

    if (exists) {
      // TODO: In a real implementation, we would check the user's current quota
      // to determine if they have a free or paid account
      // For now, we assume all existing accounts are free accounts that can be upgraded

      return NextResponse.json({
        exists: true,
        email,
        accountType: 'free', // Could be enhanced to check actual quota/plan
      });
    } else {
      return NextResponse.json({
        exists: false,
        email,
        accountType: null,
      });
    }
  } catch (error) {
    console.error('Error checking email:', error);

    return NextResponse.json(
      { error: 'Failed to check email. Please try again.' },
      { status: 500 }
    );
  }
}
