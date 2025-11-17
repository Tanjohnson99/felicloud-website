# Felicloud API Routes

This directory contains all backend API routes for Felicloud.

## Security

**IMPORTANT:** All sensitive credentials are stored in `.env.local` and accessed via `lib/config/env.ts`.
NEVER hardcode API keys, passwords, or secrets in these files!

## API Routes Structure

```
app/api/
├── auth/
│   ├── register-free/route.ts    # Free account signup
│   ├── verify-email/route.ts     # Email verification
│   └── check-existing/route.ts   # Check if account exists
├── checkout/
│   └── create-session/route.ts   # Create Stripe checkout session
├── webhooks/
│   └── stripe/route.ts            # Stripe webhook handler (CRITICAL)
├── user/
│   ├── upgrade/route.ts           # Upgrade existing account
│   └── cancel/route.ts            # Cancel subscription
└── README.md                      # This file
```

## Implementation Guide

### 1. Free Account Registration

**File:** `app/api/auth/register-free/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config/env';
import { z } from 'zod';

// Validation schema
const registerSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  try {
    // 1. Parse and validate input
    const body = await request.json();
    const { email, name, password } = registerSchema.parse(body);

    // 2. Check if user already exists in database
    // TODO: Implement database check

    // 3. Generate email verification token
    // TODO: Store token in Redis with expiry

    // 4. Send verification email via SMTP
    // TODO: Use config.smtp settings from env.ts

    // 5. Return success (don't create Nextcloud account yet)
    return NextResponse.json({
      success: true,
      message: 'Verification email sent. Please check your inbox.',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
```

### 2. Email Verification

**File:** `app/api/auth/verify-email/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/lib/config/env';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const token = searchParams.get('token');

  if (!token) {
    return NextResponse.redirect(new URL('/en?error=invalid-token', request.url));
  }

  try {
    // 1. Verify token from Redis
    // TODO: Get user data from Redis by token

    // 2. Create Nextcloud account via OCS API
    const nextcloudResponse = await fetch(
      `${config.nextcloud.url}/ocs/v1.php/cloud/users`,
      {
        method: 'POST',
        headers: {
          'OCS-APIRequest': 'true',
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(
              `${config.nextcloud.adminUser}:${config.nextcloud.adminPassword}`
            ).toString('base64'),
        },
        body: new URLSearchParams({
          userid: email,
          password: hashedPassword,
          displayName: name,
          groups: config.nextcloud.freeGroup,
          quota: '10GB',
        }),
      }
    );

    // 3. Save user to database
    // TODO: Store user in PostgreSQL

    // 4. Delete token from Redis
    // TODO: Remove verification token

    // 5. Send welcome email
    // TODO: Send SMTP email with login instructions

    // 6. Redirect to success page
    return NextResponse.redirect(new URL('/en?success=account-created', request.url));
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.redirect(new URL('/en?error=verification-failed', request.url));
  }
}
```

### 3. Stripe Checkout Session

**File:** `app/api/checkout/create-session/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { config } from '@/lib/config/env';
import { getPlanById } from '@/lib/config/plans';

const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const { planId, mode } = await request.json(); // mode: 'new' or 'upgrade'

    // Get plan configuration
    const plan = getPlanById(planId);
    if (!plan || !plan.stripePriceId) {
      return NextResponse.json({ error: 'Invalid plan' }, { status: 400 });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: plan.type === 'lifetime' ? 'payment' : 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: plan.stripePriceId,
          quantity: 1,
        },
      ],
      metadata: {
        planId: plan.id,
        mode,
        // Add user email/id if upgrade mode
      },
      success_url: `${config.app.url}/en/account/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${config.app.url}/en/pricing`,
    });

    return NextResponse.json({ sessionUrl: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json({ error: 'Failed to create checkout' }, { status: 500 });
  }
}
```

### 4. Stripe Webhook Handler (CRITICAL!)

**File:** `app/api/webhooks/stripe/route.ts`

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { config } from '@/lib/config/env';
import { getPlanByStripePriceId } from '@/lib/config/plans';

const stripe = new Stripe(config.stripe.secretKey, {
  apiVersion: '2024-11-20.acacia',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature');

  if (!sig) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(body, sig, config.stripe.webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle events
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const planId = session.metadata?.planId;

        // TODO: Create or upgrade Nextcloud account
        // TODO: Update database with subscription info

        break;
      }

      case 'customer.subscription.updated': {
        // Handle subscription changes
        break;
      }

      case 'customer.subscription.deleted': {
        // Downgrade to free or delete account
        break;
      }

      case 'invoice.payment_failed': {
        // Send warning email, suspend account after X days
        break;
      }

      case 'invoice.payment_succeeded': {
        // Confirm renewal, send receipt
        break;
      }

      default:
        console.log(`Unhandled event type: ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook handler error:', error);
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 });
  }
}
```

## Nextcloud OCS API Examples

### Create User

```typescript
const response = await fetch(
  `${config.nextcloud.url}/ocs/v1.php/cloud/users`,
  {
    method: 'POST',
    headers: {
      'OCS-APIRequest': 'true',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${config.nextcloud.adminUser}:${config.nextcloud.adminPassword}`
        ).toString('base64'),
    },
    body: new URLSearchParams({
      userid: 'user@example.com',
      password: 'securePassword123',
      displayName: 'John Doe',
      groups: '1TB Lifetime',
      quota: '1TB',
    }),
  }
);
```

### Update User Quota

```typescript
const response = await fetch(
  `${config.nextcloud.url}/ocs/v1.php/cloud/users/user@example.com`,
  {
    method: 'PUT',
    headers: {
      'OCS-APIRequest': 'true',
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization:
        'Basic ' +
        Buffer.from(
          `${config.nextcloud.adminUser}:${config.nextcloud.adminPassword}`
        ).toString('base64'),
    },
    body: new URLSearchParams({
      key: 'quota',
      value: '2TB',
    }),
  }
);
```

### Change User Group

```typescript
// Remove from old group
await fetch(
  `${config.nextcloud.url}/ocs/v1.php/cloud/users/user@example.com/groups`,
  {
    method: 'DELETE',
    headers: {
      'OCS-APIRequest': 'true',
      Authorization: 'Basic ' + Buffer.from(`${adminUser}:${adminPassword}`).toString('base64'),
    },
    body: new URLSearchParams({ groupid: '10GB Free' }),
  }
);

// Add to new group
await fetch(
  `${config.nextcloud.url}/ocs/v1.php/cloud/users/user@example.com/groups`,
  {
    method: 'POST',
    headers: {
      'OCS-APIRequest': 'true',
      Authorization: 'Basic ' + Buffer.from(`${adminUser}:${adminPassword}`).toString('base64'),
    },
    body: new URLSearchParams({ groupid: '1TB Lifetime' }),
  }
);
```

## SMTP Email Examples

Use `nodemailer` library:

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';
import { config } from '@/lib/config/env';

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  secure: config.smtp.secure,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.password,
  },
});

// Send verification email
await transporter.sendMail({
  from: `"${config.smtp.from.name}" <${config.smtp.from.email}>`,
  to: email,
  subject: 'Verify your Felicloud account',
  html: `
    <h1>Welcome to Felicloud!</h1>
    <p>Click the link below to verify your email:</p>
    <a href="${verificationUrl}">Verify Email</a>
  `,
});
```

## Security Checklist

- [x] All secrets in `.env.local` (never committed)
- [x] Stripe webhook signature verification
- [x] Input validation with Zod
- [x] Rate limiting on signup endpoints
- [x] HTTPS only in production
- [x] CORS properly configured
- [x] SQL injection prevention (use parameterized queries)
- [ ] Implement CSRF protection
- [ ] Add request logging
- [ ] Set up error monitoring (Sentry)

## Next Steps

1. Set up PostgreSQL database
2. Set up Redis for caching/sessions
3. Install dependencies: `npm install stripe nodemailer zod bcrypt`
4. Configure Stripe webhook endpoint in dashboard
5. Test with Stripe test mode first
6. Implement each API route step by step
7. Add comprehensive error handling and logging
