import { NextRequest, NextResponse } from 'next/server';
import { checkUserExists } from '@/lib/services/nextcloud';
import { rateLimiters } from '@/lib/utils/rate-limit';

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
 *
 * Security: Rate limited to 10 requests per minute per IP
 */
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting (10 requests per minute)
    const rateLimitResult = await rateLimiters.emailCheck.check(request);
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { error: rateLimitResult.error },
        { status: 429 }
      );
      rateLimiters.emailCheck.addHeaders(response.headers, rateLimitResult);
      return response;
    }

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
