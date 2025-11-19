import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import Stripe from 'stripe';
import { createNextcloudUser, updateUserQuota } from '@/lib/services/nextcloud';
import { sendWelcomeEmail } from '@/lib/services/email';

/**
 * POST /api/webhooks/stripe
 *
 * Stripe webhook handler for payment events
 * Handles account creation and upgrades after successful payment
 *
 * Important: Configure this URL in Stripe Dashboard:
 * https://dashboard.stripe.com/webhooks
 *
 * Events handled:
 * - checkout.session.completed: Create/upgrade account after payment
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const headersList = await headers();
    const signature = headersList.get('stripe-signature');

    if (!signature) {
      console.error('Missing stripe-signature header');
      return NextResponse.json(
        { error: 'Missing signature' },
        { status: 400 }
      );
    }

    // Verify environment variables
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

    if (!stripeSecretKey || !webhookSecret) {
      console.error('Missing Stripe configuration');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-11-17.clover',
    });

    // Verify webhook signature (SECURE)
    let event: Stripe.Event;
    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
      console.log('✅ Webhook signature verified:', event.type);
    } catch (err) {
      const error = err as Error;
      console.error('❌ Webhook signature verification failed:', error.message);
      return NextResponse.json(
        { error: `Webhook signature verification failed: ${error.message}` },
        { status: 400 }
      );
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;

        // Extract customer data from session
        const customerEmail = session.customer_email || session.client_reference_id;
        const metadata = session.metadata || {};
        const action = metadata.action; // 'create' or 'upgrade'
        const plan = metadata.plan;
        const storage = metadata.storage;

        console.log('Payment completed:', {
          email: customerEmail,
          action,
          plan,
          storage,
        });

        if (!customerEmail) {
          console.error('No customer email found in session');
          return NextResponse.json(
            { error: 'No customer email' },
            { status: 400 }
          );
        }

        // Parse storage quota (e.g., "1TB" -> 1099511627776 bytes)
        const quotaInBytes = parseStorageToBytes(storage);

        if (action === 'create') {
          // Create new Nextcloud account with paid quota
          console.log('Creating new account for:', customerEmail);

          // Generate a random password (user will reset it via email)
          const tempPassword = generateRandomPassword();

          const result = await createNextcloudUser({
            username: customerEmail,
            password: tempPassword,
            email: customerEmail,
            displayName: customerEmail.split('@')[0],
            quota: quotaInBytes,
          });

          if (result.success) {
            // Send welcome email with credentials
            await sendWelcomeEmail(customerEmail, customerEmail, tempPassword);
            console.log('Account created successfully for:', customerEmail);
          } else {
            console.error('Failed to create account:', result.message);
          }
        } else if (action === 'upgrade') {
          // Upgrade existing account quota
          console.log('Upgrading account for:', customerEmail);

          const result = await updateUserQuota(customerEmail, quotaInBytes);

          if (result.success) {
            // Send upgrade confirmation email
            // TODO: Create sendUpgradeEmail function
            console.log('Account upgraded successfully for:', customerEmail);
          } else {
            console.error('Failed to upgrade account:', result.message);
          }
        }

        break;
      }

      case 'checkout.session.expired': {
        // Handle expired checkout session if needed
        console.log('Checkout session expired:', event.data.object.id);
        break;
      }

      default:
        console.log('Unhandled event type:', event.type);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Stripe webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook handler failed' },
      { status: 500 }
    );
  }
}

/**
 * Parse storage string to bytes
 * @param storage - Storage string (e.g., "1TB", "500GB")
 * @returns Storage in bytes
 */
function parseStorageToBytes(storage: string): number {
  if (!storage) return 10 * 1024 * 1024 * 1024; // Default 10GB

  const value = parseInt(storage);
  const unit = storage.replace(/[0-9]/g, '').toUpperCase();

  switch (unit) {
    case 'GB':
      return value * 1024 * 1024 * 1024;
    case 'TB':
      return value * 1024 * 1024 * 1024 * 1024;
    default:
      return value;
  }
}

/**
 * Generate a random password
 * @returns Random password string
 */
function generateRandomPassword(): string {
  const length = 16;
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
  let password = '';

  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  return password;
}
