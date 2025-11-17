# Stripe Payment Integration Setup

This document explains how to configure Stripe payments for Felicloud.

## Overview

The payment flow works as follows:

1. User selects a plan on the pricing page
2. User enters email on checkout page
3. System checks if user exists (upgrade vs new account)
4. User is redirected to Stripe Checkout
5. After successful payment, Stripe sends webhook to create/upgrade account
6. User is redirected to success page
7. Welcome email is sent with credentials

## Prerequisites

- Stripe account ([sign up here](https://dashboard.stripe.com/register))
- Stripe Checkout links already created (see `docs/STRIPE_LINKS.md`)

## Configuration Steps

### 1. Get Stripe API Keys

1. Go to [Stripe Dashboard → Developers → API keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_live_` or `pk_test_`)
3. Copy your **Secret key** (starts with `sk_live_` or `sk_test_`)
4. Add them to your `.env.local`:

```env
STRIPE_PUBLIC_KEY=pk_live_xxxxxxxxxxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_live_xxxxxxxxxxxxxxxxxxxxx
```

### 2. Configure Stripe Checkout Links

The Stripe Checkout links are already configured in `/lib/config/stripe.ts`. These links should be created in your Stripe Dashboard with the following settings:

**For each plan, configure in Stripe Dashboard:**

1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Create products with appropriate pricing
3. Create Checkout links with these settings:
   - **Success URL**: `https://yourdomain.com/en/payment/success?session_id={CHECKOUT_SESSION_ID}`
   - **Cancel URL**: `https://yourdomain.com/en/pricing`
   - **Collect customer email**: Yes
   - **Allow promotion codes**: Optional (recommended)

### 3. Configure Webhook

The webhook is critical for account creation. Configure it in Stripe Dashboard:

1. Go to [Stripe Dashboard → Developers → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click "Add endpoint"
3. Enter your webhook URL:
   ```
   https://yourdomain.com/api/webhooks/stripe
   ```
4. Select events to listen to:
   - `checkout.session.completed` ✅ (required)
   - `checkout.session.expired` (optional)
5. Copy the **Signing secret** (starts with `whsec_`)
6. Add it to `.env.local`:
   ```env
   STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxx
   ```

### 4. Update Checkout Links with Custom Parameters

In your Stripe Dashboard, for each Checkout link, ensure you enable **"Prefill customer email"** and **"Metadata"** to track which plan was purchased.

The application automatically adds these parameters when redirecting to Stripe:
- `prefilled_email` - Customer email
- `client_reference_id` - Customer email (for webhook identification)
- `action` - "create" or "upgrade"
- `plan` - e.g., "1TB_Lifetime"
- `billing` - "monthly", "annual", or "lifetime"
- `storage` - e.g., "1TB", "500GB"

## Testing

### Test Mode

1. Use Stripe test keys (start with `pk_test_` and `sk_test_`)
2. Use [Stripe test cards](https://stripe.com/docs/testing#cards):
   - **Success**: `4242 4242 4242 4242`
   - **Decline**: `4000 0000 0000 0002`
   - Use any future expiry date (e.g., 12/34)
   - Use any 3-digit CVC

### Test the Flow

1. Go to pricing page
2. Click "Get Started" on any plan
3. Enter a test email (e.g., `test@example.com`)
4. Complete payment with test card
5. Verify:
   - Redirected to success page
   - Webhook received (check logs)
   - Account created in Nextcloud
   - Welcome email sent

### Webhook Testing

To test webhooks locally:

1. Install [Stripe CLI](https://stripe.com/docs/stripe-cli)
2. Run:
   ```bash
   stripe login
   stripe listen --forward-to localhost:3000/api/webhooks/stripe
   ```
3. Trigger test events:
   ```bash
   stripe trigger checkout.session.completed
   ```

## Production Deployment

### Before Going Live

1. ✅ Switch to **Live API keys** (not test keys)
2. ✅ Update webhook URL to production domain
3. ✅ Update Checkout link success/cancel URLs to production domain
4. ✅ Test with real card (then refund)
5. ✅ Verify email delivery works
6. ✅ Verify Nextcloud account creation works
7. ✅ Set up monitoring for webhook failures

### Security Checklist

- [ ] `.env.local` is in `.gitignore` (never commit secrets!)
- [ ] Webhook signature verification is enabled (see `app/api/webhooks/stripe/route.ts`)
- [ ] HTTPS is enabled on your domain
- [ ] Stripe webhook endpoint is **NOT** publicly accessible without signature verification

## Webhook Signature Verification

**⚠️ IMPORTANT:** The current webhook implementation does NOT verify signatures. This MUST be fixed before production!

Update `/app/api/webhooks/stripe/route.ts`:

```typescript
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  const body = await request.text();
  const signature = headers().get('stripe-signature');

  let event: Stripe.Event;

  try {
    // Verify webhook signature
    event = stripe.webhooks.constructEvent(
      body,
      signature!,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle event...
}
```

Install Stripe SDK:
```bash
npm install stripe
```

## Monitoring

### Check Webhook Status

1. Go to [Stripe Dashboard → Developers → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click on your endpoint
3. View recent deliveries and success/failure rates

### Common Issues

**Webhook fails with 500 error:**
- Check server logs
- Verify Nextcloud credentials are correct
- Verify SMTP credentials are correct

**Account not created after payment:**
- Check webhook was delivered (Stripe Dashboard)
- Check server logs for errors
- Verify `action` metadata is set correctly

**Email not sent:**
- Check SMTP configuration
- Check spam folder
- Verify `SMTP_*` environment variables

## Support

For Stripe-specific issues:
- [Stripe Documentation](https://stripe.com/docs)
- [Stripe Support](https://support.stripe.com/)

For Felicloud integration issues:
- Check server logs
- Review webhook delivery attempts in Stripe Dashboard
- Contact your development team
