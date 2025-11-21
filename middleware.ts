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
  const isDevelopment = process.env.NODE_ENV === 'development';

  // Get expected origin - use request origin as fallback
  const expectedOrigin = process.env.NEXT_PUBLIC_APP_URL
    ? new URL(process.env.NEXT_PUBLIC_APP_URL).origin
    : request.nextUrl.origin;

  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const host = request.headers.get('host');

  // In development, be more lenient with localhost origins
  if (isDevelopment && origin) {
    const isLocalhost = origin.includes('localhost') || origin.includes('127.0.0.1');
    const expectedIsLocalhost = expectedOrigin.includes('localhost') || expectedOrigin.includes('127.0.0.1');

    if (isLocalhost && expectedIsLocalhost) {
      return { valid: true };
    }
  }

  // Check if origin matches expected origin or host header
  if (origin) {
    const originMatches = origin === expectedOrigin;
    const originMatchesHost = host && origin === `https://${host}`;
    const originMatchesHostHttp = host && origin === `http://${host}`;

    if (!originMatches && !originMatchesHost && !originMatchesHostHttp) {
      console.warn(`⚠️ CSRF: Origin mismatch. Expected: ${expectedOrigin}, Got: ${origin}, Host: ${host}`);

      // In production, if NEXT_PUBLIC_APP_URL is not set, allow if origin matches host
      if (!process.env.NEXT_PUBLIC_APP_URL && (originMatchesHost || originMatchesHostHttp)) {
        console.log(`✅ CSRF: Allowing request - origin matches host header`);
        return { valid: true };
      }

      return { valid: false, error: 'CSRF validation failed: Origin mismatch' };
    }
  }

  // Validate Referer header (if present and no Origin was provided)
  if (!origin && referer) {
    try {
      const refererUrl = new URL(referer);
      const refererMatches = refererUrl.origin === expectedOrigin;
      const refererMatchesHost = host && (
        refererUrl.origin === `https://${host}` ||
        refererUrl.origin === `http://${host}`
      );

      if (!refererMatches && !refererMatchesHost) {
        console.warn(`⚠️ CSRF: Referer mismatch. Expected: ${expectedOrigin}, Got: ${refererUrl.origin}, Host: ${host}`);

        // In production, if NEXT_PUBLIC_APP_URL is not set, allow if referer matches host
        if (!process.env.NEXT_PUBLIC_APP_URL && refererMatchesHost) {
          console.log(`✅ CSRF: Allowing request - referer matches host header`);
          return { valid: true };
        }

        return { valid: false, error: 'CSRF validation failed: Referer mismatch' };
      }
    } catch {
      // Invalid referer URL - continue to check if we have neither origin nor referer
    }
  }

  // If neither Origin nor Referer is present for a state-changing request, reject
  if (!origin && !referer) {
    console.warn(`⚠️ CSRF: Missing both Origin and Referer headers`);
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
