/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server mode enabled for API routes, webhooks, and secure backend operations
  trailingSlash: true,
  images: {
    unoptimized: true,
  },

  // Security Headers
  // These headers protect against common web vulnerabilities
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            // Content Security Policy (CSP)
            // Helps prevent XSS attacks by controlling which resources can be loaded
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.stripe.com https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: https: blob:",
              "connect-src 'self' https://api.stripe.com https://*.stripe.com",
              "frame-src 'self' https://js.stripe.com https://hooks.stripe.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          {
            // X-Frame-Options
            // Prevents clickjacking attacks by controlling if the site can be embedded in iframes
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // X-Content-Type-Options
            // Prevents MIME type sniffing
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Referrer-Policy
            // Controls how much referrer information is shared
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            // Permissions-Policy (formerly Feature-Policy)
            // Controls which browser features can be used
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'interest-cohort=()',
            ].join(', '),
          },
          {
            // X-DNS-Prefetch-Control
            // Controls DNS prefetching
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            // Strict-Transport-Security (HSTS)
            // Forces HTTPS connections (only enable if using HTTPS)
            // Uncomment when deployed with HTTPS
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
    ];
  },

  // Additional security settings
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Enable gzip compression
  compress: true,

  // Remove X-Powered-By header (security through obscurity)
  poweredByHeader: false,

  // Enable React Strict Mode for better error detection
  reactStrictMode: true,
};

export default nextConfig;
