import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { getPricingPlan, isValidPlanKey } from '@/lib/config/pricing';
import { rateLimiters } from '@/lib/utils/rate-limit';

/**
 * POST /api/checkout/create-session
 *
 * Creates a Stripe Checkout session dynamically with correct metadata
 * This replaces the need for Payment Links configured in Stripe Dashboard
 *
 * Security: Rate limited to 5 requests per 15 minutes per IP
 */
export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting (5 requests per 15 minutes)
    const rateLimitResult = await rateLimiters.checkout.check(request);
    if (!rateLimitResult.success) {
      const response = NextResponse.json(
        { error: rateLimitResult.error },
        { status: 429 }
      );
      rateLimiters.checkout.addHeaders(response.headers, rateLimitResult);
      return response;
    }

    const body = await request.json();
    const { plan, email, isUpgrade } = body;

    // Validate required fields
    if (!plan || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: plan and email' },
        { status: 400 }
      );
    }

    // Validate plan exists
    if (!isValidPlanKey(plan)) {
      return NextResponse.json(
        { error: `Invalid plan: ${plan}` },
        { status: 400 }
      );
    }

    // Get plan configuration
    const pricingPlan = getPricingPlan(plan);
    if (!pricingPlan) {
      return NextResponse.json(
        { error: `Plan not found: ${plan}` },
        { status: 404 }
      );
    }

    // Validate Stripe configuration
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      console.error('STRIPE_SECRET_KEY not configured');
      return NextResponse.json(
        { error: 'Payment system not configured' },
        { status: 500 }
      );
    }

    // Initialize Stripe
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: '2025-11-17.clover',
    });

    // Determine success and cancel URLs
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://felicloud.com';
    const successUrl = `${baseUrl}/en/payment/success?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/en/pricing`;

    // Prepare metadata (sent to webhook)
    const metadata = {
      action: isUpgrade ? 'upgrade' : 'create',
      plan: plan,
      billing: pricingPlan.billing,
      storage: pricingPlan.storage,
    };

    console.log('Creating Stripe session:', {
      plan,
      email,
      isUpgrade,
      price: pricingPlan.price,
      metadata,
    });

    // Create session based on billing type
    let sessionParams: Stripe.Checkout.SessionCreateParams;

    if (pricingPlan.billing === 'lifetime') {
      // One-time payment (Lifetime plans)
      sessionParams = {
        mode: 'payment',
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: pricingPlan.name,
                description: pricingPlan.description,
              },
              unit_amount: pricingPlan.price,
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata,
        success_url: successUrl,
        cancel_url: cancelUrl,
        automatic_tax: {
          enabled: true,
        },
        // Legal compliance: Collect complete customer information
        billing_address_collection: 'required',
        phone_number_collection: {
          enabled: true,
        },
        customer_creation: 'always', // Always create a Stripe customer
        custom_fields: [
          {
            key: 'company_name',
            label: {
              type: 'custom',
              custom: 'Company Name (if applicable)',
            },
            type: 'text',
            optional: true,
          },
          {
            key: 'vat_number',
            label: {
              type: 'custom',
              custom: 'VAT Number (if applicable)',
            },
            type: 'text',
            optional: true,
          },
        ],
      };
    } else {
      // Recurring payment (Monthly/Annual plans)
      // Note: customer_creation is NOT supported in subscription mode (Stripe creates customer automatically)
      sessionParams = {
        mode: 'subscription',
        line_items: [
          {
            price_data: {
              currency: 'eur',
              product_data: {
                name: pricingPlan.name,
                description: pricingPlan.description,
              },
              unit_amount: pricingPlan.price,
              recurring: {
                interval: pricingPlan.interval as 'month' | 'year',
              },
            },
            quantity: 1,
          },
        ],
        customer_email: email,
        metadata,
        success_url: successUrl,
        cancel_url: cancelUrl,
        automatic_tax: {
          enabled: true,
        },
        // Legal compliance: Collect complete customer information
        billing_address_collection: 'required',
        phone_number_collection: {
          enabled: true,
        },
        // customer_creation is automatically 'always' for subscription mode, no need to specify
        custom_fields: [
          {
            key: 'company_name',
            label: {
              type: 'custom',
              custom: 'Company Name (if applicable)',
            },
            type: 'text',
            optional: true,
          },
          {
            key: 'vat_number',
            label: {
              type: 'custom',
              custom: 'VAT Number (if applicable)',
            },
            type: 'text',
            optional: true,
          },
        ],
      };
    }

    // Create the session
    const session = await stripe.checkout.sessions.create(sessionParams);

    console.log('Stripe session created:', {
      sessionId: session.id,
      url: session.url,
    });

    // Return session URL
    return NextResponse.json({
      url: session.url,
      sessionId: session.id,
    });

  } catch (error) {
    console.error('Error creating Stripe session:', error);
    return NextResponse.json(
      {
        error: 'Failed to create checkout session',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
