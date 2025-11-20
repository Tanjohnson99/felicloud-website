import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/services/email';
import { rateLimiters } from '@/lib/utils/rate-limit';

/**
 * POST /api/contact
 * Handle contact form submissions
 * This route runs on the SERVER - SMTP credentials are never exposed
 *
 * Security: Rate limited to 5 requests per 15 minutes per IP
 */
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting (5 requests per 15 minutes)
    const rateLimitResult = await rateLimiters.contact.check(request);
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { error: rateLimitResult.error },
        { status: 429 }
      );
      rateLimiters.contact.addHeaders(response.headers, rateLimitResult);
      return response;
    }

    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
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

    // Send email (server-side only)
    await sendContactEmail(name, email, message);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
