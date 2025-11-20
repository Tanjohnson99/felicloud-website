/**
 * Rate Limiting Utility
 *
 * Simple in-memory rate limiter for API endpoints
 * For production with multiple servers, consider using Redis
 *
 * Usage:
 * ```typescript
 * const limiter = createRateLimiter({ maxRequests: 5, windowMs: 60000 });
 * const result = await limiter.check(request);
 * if (!result.success) {
 *   return NextResponse.json({ error: result.error }, { status: 429 });
 * }
 * ```
 */

interface RateLimitConfig {
  maxRequests: number;  // Maximum number of requests
  windowMs: number;     // Time window in milliseconds
}

interface RateLimitResult {
  success: boolean;
  limit: number;
  remaining: number;
  resetTime: number;
  error?: string;
}

interface RequestRecord {
  count: number;
  resetTime: number;
}

// In-memory storage for rate limit records
// Key format: "identifier:endpoint" (e.g., "192.168.1.1:/api/signup")
const rateLimitStore = new Map<string, RequestRecord>();

// Cleanup old entries every 10 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitStore.entries()) {
    if (record.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 10 * 60 * 1000);

/**
 * Get client identifier from request
 * Tries multiple sources in order of priority:
 * 1. X-Forwarded-For (for proxied requests)
 * 2. X-Real-IP (for nginx)
 * 3. req.ip (direct connection)
 * 4. 'unknown' (fallback)
 */
function getClientIdentifier(request: Request): string {
  // Get headers (works with Next.js Request object)
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  if (forwardedFor) {
    // X-Forwarded-For can contain multiple IPs, take the first one
    return forwardedFor.split(',')[0].trim();
  }

  if (realIp) {
    return realIp;
  }

  // Fallback to 'unknown' if no IP found
  return 'unknown';
}

/**
 * Create a rate limiter function
 * @param config Rate limit configuration
 * @returns Rate limiter function
 */
export function createRateLimiter(config: RateLimitConfig) {
  return {
    /**
     * Check if request is within rate limit
     * @param request Next.js Request object
     * @param endpoint Optional endpoint identifier (defaults to request.url)
     * @returns Rate limit result
     */
    async check(request: Request, endpoint?: string): Promise<RateLimitResult> {
      const identifier = getClientIdentifier(request);
      const endpointPath = endpoint || new URL(request.url).pathname;
      const key = `${identifier}:${endpointPath}`;

      const now = Date.now();
      const record = rateLimitStore.get(key);

      // No record exists, create new one
      if (!record) {
        rateLimitStore.set(key, {
          count: 1,
          resetTime: now + config.windowMs,
        });

        return {
          success: true,
          limit: config.maxRequests,
          remaining: config.maxRequests - 1,
          resetTime: now + config.windowMs,
        };
      }

      // Record exists but window has expired, reset
      if (record.resetTime < now) {
        rateLimitStore.set(key, {
          count: 1,
          resetTime: now + config.windowMs,
        });

        return {
          success: true,
          limit: config.maxRequests,
          remaining: config.maxRequests - 1,
          resetTime: now + config.windowMs,
        };
      }

      // Within window, check if limit exceeded
      if (record.count >= config.maxRequests) {
        const resetInSeconds = Math.ceil((record.resetTime - now) / 1000);
        return {
          success: false,
          limit: config.maxRequests,
          remaining: 0,
          resetTime: record.resetTime,
          error: `Too many requests. Please try again in ${resetInSeconds} seconds.`,
        };
      }

      // Increment count
      record.count += 1;
      rateLimitStore.set(key, record);

      return {
        success: true,
        limit: config.maxRequests,
        remaining: config.maxRequests - record.count,
        resetTime: record.resetTime,
      };
    },

    /**
     * Add rate limit headers to response
     * Standard headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset
     */
    addHeaders(headers: Headers, result: RateLimitResult): void {
      headers.set('X-RateLimit-Limit', result.limit.toString());
      headers.set('X-RateLimit-Remaining', result.remaining.toString());
      headers.set('X-RateLimit-Reset', result.resetTime.toString());
    },
  };
}

/**
 * Pre-configured rate limiters for common use cases
 */
export const rateLimiters = {
  // Strict limit for signup (3 requests per hour)
  signup: createRateLimiter({
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
  }),

  // Moderate limit for contact form (5 requests per 15 minutes)
  contact: createRateLimiter({
    maxRequests: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
  }),

  // Lenient limit for email checks (10 requests per minute)
  emailCheck: createRateLimiter({
    maxRequests: 10,
    windowMs: 60 * 1000, // 1 minute
  }),

  // Very strict limit for verification (3 requests per hour)
  verification: createRateLimiter({
    maxRequests: 3,
    windowMs: 60 * 60 * 1000, // 1 hour
  }),

  // Moderate limit for checkout (5 requests per 15 minutes)
  checkout: createRateLimiter({
    maxRequests: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
  }),
};
