import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Next.js Middleware
 *
 * Runs before every request to add security protections:
 * 1. CSRF protection for API routes
 * 2. Security headers (configured in next.config.mjs)
 *
 * This middleware runs at the Edge Runtime for optimal performance.
 */

/**
 * Check if a request should be exempt from CSRF validation
 */
function shouldSkipCsrfValidation(request: NextRequest): boolean {
  const method = request.method.toUpperCase();

  // Safe HTTP methods don't need CSRF protection
  if (['GET', 'HEAD', 'OPTIONS'].includes(method)) {
    return true;
  }

  // Webhook endpoints use signature validation instead of CSRF
  if (request.nextUrl.pathname.includes('/api/webhooks/')) {
    return true;
  }

  // Health check endpoint
  if (request.nextUrl.pathname === '/api/health') {
    return true;
  }

  return false;
}

/**
 * Validate CSRF protection for API routes
 */
function validateCsrf(request: NextRequest): { valid: boolean; error?: string } {
  // Get expected origin
  const expectedOrigin = process.env.NEXT_PUBLIC_APP_URL
    ? new URL(process.env.NEXT_PUBLIC_APP_URL).origin
    : request.nextUrl.origin;

  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // Validate Origin header
  if (origin && origin !== expectedOrigin) {
    console.warn(`⚠️ CSRF: Origin mismatch. Expected: ${expectedOrigin}, Got: ${origin}`);
    return { valid: false, error: 'CSRF validation failed: Origin mismatch' };
  }

  // Validate Referer header (if present)
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.origin !== expectedOrigin) {
        console.warn(`⚠️ CSRF: Referer mismatch. Expected: ${expectedOrigin}, Got: ${refererUrl.origin}`);
        return { valid: false, error: 'CSRF validation failed: Referer mismatch' };
      }
    } catch {
      return { valid: false, error: 'CSRF validation failed: Invalid Referer' };
    }
  }

  // If neither Origin nor Referer is present for a state-changing request, reject
  if (!origin && !referer) {
    return { valid: false, error: 'CSRF validation failed: Missing Origin and Referer headers' };
  }

  return { valid: true };
}

export function middleware(request: NextRequest) {
  // Apply CSRF protection to API routes
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Skip CSRF validation for safe methods and webhooks
    if (!shouldSkipCsrfValidation(request)) {
      const csrfResult = validateCsrf(request);
      if (!csrfResult.valid) {
        return NextResponse.json(
          { error: csrfResult.error },
          { status: 403 }
        );
      }
    }
  }

  // Continue to the route handler
  return NextResponse.next();
}

/**
 * Configure which routes the middleware should run on
 * Currently: All API routes
 */
export const config = {
  matcher: '/api/:path*',
};
