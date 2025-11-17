/**
 * SECURE ENVIRONMENT CONFIGURATION
 *
 * This file validates and exports all environment variables.
 * NEVER import process.env directly in your code - always use this file!
 */

// Validate required environment variables
function validateEnv() {
  const required = [
    'NEXTCLOUD_URL',
    'NEXTCLOUD_ADMIN_USER',
    'NEXTCLOUD_ADMIN_PASSWORD',
    'STRIPE_SECRET_KEY',
    'STRIPE_WEBHOOK_SECRET',
    'DATABASE_URL',
    'SMTP_HOST',
    'SMTP_USER',
    'SMTP_PASSWORD',
    'JWT_SECRET',
  ];

  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missing.join(', ')}\n` +
      'Please check your .env.local file and ensure all required variables are set.'
    );
  }
}

// Validate on module load (only in production)
if (process.env.NODE_ENV === 'production') {
  validateEnv();
}

// Application Config
export const config = {
  app: {
    env: process.env.NODE_ENV || 'development',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  },

  // Database
  database: {
    url: process.env.DATABASE_URL!,
    poolMin: parseInt(process.env.DATABASE_POOL_MIN || '2'),
    poolMax: parseInt(process.env.DATABASE_POOL_MAX || '10'),
  },

  // Nextcloud
  nextcloud: {
    url: process.env.NEXTCLOUD_URL!,
    adminUser: process.env.NEXTCLOUD_ADMIN_USER!,
    adminPassword: process.env.NEXTCLOUD_ADMIN_PASSWORD!,
    freeGroup: process.env.NEXTCLOUD_FREE_GROUP || '10GB Free',
  },

  // Stripe
  stripe: {
    publicKey: process.env.STRIPE_PUBLIC_KEY || '',
    secretKey: process.env.STRIPE_SECRET_KEY!,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET!,
    prices: {
      // Monthly
      '500GB_Monthly': process.env.STRIPE_PRICE_500GB_MONTHLY || '',
      '1TB_Monthly': process.env.STRIPE_PRICE_1TB_MONTHLY || '',
      '2TB_Monthly': process.env.STRIPE_PRICE_2TB_MONTHLY || '',
      // Annual
      '500GB_Annual': process.env.STRIPE_PRICE_500GB_ANNUAL || '',
      '1TB_Annual': process.env.STRIPE_PRICE_1TB_ANNUAL || '',
      '2TB_Annual': process.env.STRIPE_PRICE_2TB_ANNUAL || '',
      // Lifetime
      '500GB_Lifetime': process.env.STRIPE_PRICE_500GB_LIFETIME || '',
      '1TB_Lifetime': process.env.STRIPE_PRICE_1TB_LIFETIME || '',
      '2TB_Lifetime': process.env.STRIPE_PRICE_2TB_LIFETIME || '',
    },
  },

  // SMTP
  smtp: {
    host: process.env.SMTP_HOST!,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER!,
    password: process.env.SMTP_PASSWORD!,
    from: {
      email: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER!,
      name: process.env.SMTP_FROM_NAME || 'Felicloud',
    },
  },

  // Email Verification
  email: {
    verificationExpiryHours: parseInt(process.env.EMAIL_VERIFICATION_EXPIRY_HOURS || '24'),
    verificationUrl: process.env.EMAIL_VERIFICATION_URL || `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/verify-email`,
  },

  // Security
  security: {
    jwtSecret: process.env.JWT_SECRET!,
    sessionSecret: process.env.SESSION_SECRET || process.env.JWT_SECRET!,
    rateLimits: {
      signupPerHour: parseInt(process.env.RATE_LIMIT_SIGNUP_PER_HOUR || '3'),
      signupPerIp: parseInt(process.env.RATE_LIMIT_SIGNUP_PER_IP || '3'),
    },
  },

  // Redis
  redis: {
    url: process.env.REDIS_URL || 'redis://localhost:6379',
    password: process.env.REDIS_PASSWORD,
  },

  // Monitoring
  monitoring: {
    sentryDsn: process.env.SENTRY_DSN,
    logLevel: process.env.LOG_LEVEL || 'info',
  },

  // Feature Flags
  features: {
    freeSignup: process.env.FEATURE_FREE_SIGNUP !== 'false',
    paidPlans: process.env.FEATURE_PAID_PLANS !== 'false',
    emailVerification: process.env.FEATURE_EMAIL_VERIFICATION !== 'false',
    adminDashboard: process.env.FEATURE_ADMIN_DASHBOARD === 'true',
  },
} as const;

// Export public config (safe to use in client-side code)
export const publicConfig = {
  app: {
    url: config.app.url,
  },
  stripe: {
    publicKey: config.stripe.publicKey,
  },
  features: config.features,
} as const;
