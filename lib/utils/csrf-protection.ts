/**
 * CSRF Protection Utility
 *
 * Protects against Cross-Site Request Forgery attacks by validating:
 * 1. Origin header matches the expected origin
 * 2. Referer header (if present) matches the expected origin
 *
 * This is a simplified CSRF protection suitable for same-origin API calls.
 * For more advanced CSRF protection with tokens, consider using edge-csrf library.
 *
 * Usage:
 * ```typescript
 * const csrfResult = validateCsrfHeaders(request);
 * if (!csrfResult.valid) {
 *   return NextResponse.json({ error: csrfResult.error }, { status: 403 });
 * }
 * ```
 */

interface CsrfValidationResult {
  valid: boolean;
  error?: string;
}

/**
 * Get the expected origin for CSRF validation
 * Uses NEXT_PUBLIC_APP_URL if set, otherwise constructs from request
 */
function getExpectedOrigin(request: Request): string {
  // Try to get from environment variable first
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;
  if (appUrl) {
    try {
      return new URL(appUrl).origin;
    } catch {
      // Invalid URL in env, fall through
    }
  }

  // Fallback: construct from request
  const requestUrl = new URL(request.url);
  return requestUrl.origin;
}

/**
 * Validate CSRF protection headers
 *
 * Checks:
 * 1. Origin header exists and matches expected origin
 * 2. If Referer exists, it must also match expected origin
 *
 * @param request Next.js Request object
 * @returns Validation result
 */
export function validateCsrfHeaders(request: Request): CsrfValidationResult {
  const expectedOrigin = getExpectedOrigin(request);
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');

  // Check 1: Origin header validation
  if (!origin) {
    // Origin header is missing - this is suspicious for POST/PUT/DELETE
    // Allow it only if referer is present and valid
    if (!referer) {
      return {
        valid: false,
        error: 'CSRF validation failed: Missing Origin and Referer headers',
      };
    }
  } else {
    // Origin exists, validate it
    if (origin !== expectedOrigin) {
      console.warn(`⚠️ CSRF: Origin mismatch. Expected: ${expectedOrigin}, Got: ${origin}`);
      return {
        valid: false,
        error: 'CSRF validation failed: Origin mismatch',
      };
    }
  }

  // Check 2: Referer validation (if present)
  if (referer) {
    try {
      const refererUrl = new URL(referer);
      if (refererUrl.origin !== expectedOrigin) {
        console.warn(`⚠️ CSRF: Referer mismatch. Expected: ${expectedOrigin}, Got: ${refererUrl.origin}`);
        return {
          valid: false,
          error: 'CSRF validation failed: Referer mismatch',
        };
      }
    } catch {
      // Invalid referer URL
      return {
        valid: false,
        error: 'CSRF validation failed: Invalid Referer header',
      };
    }
  }

  // All checks passed
  return { valid: true };
}

/**
 * Check if a request should be exempt from CSRF validation
 *
 * Exemptions:
 * - GET, HEAD, OPTIONS requests (safe methods)
 * - Webhook endpoints (validated via signature instead)
 *
 * @param request Next.js Request object
 * @returns true if request should skip CSRF validation
 */
export function shouldSkipCsrfValidation(request: Request): boolean {
  const method = request.method.toUpperCase();

  // Safe HTTP methods don't need CSRF protection
  if (['GET', 'HEAD', 'OPTIONS'].includes(method)) {
    return true;
  }

  // Webhook endpoints use signature validation instead of CSRF
  const url = new URL(request.url);
  if (url.pathname.includes('/api/webhooks/')) {
    return true;
  }

  return false;
}

/**
 * Wrapper function to apply CSRF protection to a route handler
 *
 * Example:
 * ```typescript
 * export async function POST(request: NextRequest) {
 *   const csrfResult = checkCsrfProtection(request);
 *   if (csrfResult) return csrfResult; // Returns error response if invalid
 *
 *   // Continue with normal processing...
 * }
 * ```
 */
export function checkCsrfProtection(request: Request): Response | null {
  // Skip validation if not applicable
  if (shouldSkipCsrfValidation(request)) {
    return null;
  }

  // Validate CSRF headers
  const csrfResult = validateCsrfHeaders(request);
  if (!csrfResult.valid) {
    return new Response(
      JSON.stringify({ error: csrfResult.error }),
      {
        status: 403,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  return null; // Validation passed
}
