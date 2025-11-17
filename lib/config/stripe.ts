/**
 * Stripe Checkout Configuration
 *
 * This file contains all Stripe Checkout links for Felicloud plans.
 * These links are used throughout the application for payment processing.
 */

export const STRIPE_CHECKOUT_LINKS = {
  // Monthly Plans
  '500GB_Monthly': 'https://buy.stripe.com/14A8wP7iCbLE4Ae2m5fbq05',
  '1TB_Monthly': 'https://buy.stripe.com/4gMbJ10Ue6rkc2Gd0Jfbq0a',
  '2TB_Monthly': 'https://buy.stripe.com/4gMdR9dH0cPI8Qu8Ktfbq0b',

  // Annual Plans
  '500GB_Annual': 'https://buy.stripe.com/aFaaEX9qK6rk2s66Clfbq06',
  '1TB_Annual': 'https://buy.stripe.com/aFaeVd6ey5nggiWf8Rfbq09',
  '2TB_Annual': 'https://buy.stripe.com/9B628rauO2b45EiaSBfbq0c',

  // Lifetime Plans
  '500GB_Lifetime': 'https://buy.stripe.com/3cI7sL7iC6rk4Ae4udfbq07',
  '1TB_Lifetime': 'https://buy.stripe.com/3cIfZhdH06rk6Im9Oxfbq08',
  '2TB_Lifetime': 'https://buy.stripe.com/5kQeVd0UecPI8Qu4udfbq0d',
} as const;

export type StripePlanKey = keyof typeof STRIPE_CHECKOUT_LINKS;

/**
 * Get Stripe Checkout URL for a specific plan
 * @param plan - Plan identifier (e.g., "1TB_Lifetime")
 * @param customerEmail - Customer email to prefill in Stripe
 * @param metadata - Additional metadata to pass to Stripe
 * @returns Full Stripe Checkout URL with parameters
 */
export function getStripeCheckoutUrl(
  plan: string,
  customerEmail: string,
  metadata?: Record<string, string>
): string {
  const baseUrl = STRIPE_CHECKOUT_LINKS[plan as StripePlanKey];

  if (!baseUrl) {
    throw new Error(`Invalid plan: ${plan}. Please check STRIPE_CHECKOUT_LINKS configuration.`);
  }

  // Build URL with query parameters
  const url = new URL(baseUrl);

  // Add customer email for prefilling
  url.searchParams.set('prefilled_email', customerEmail);

  // Add client reference ID (can be used to identify the customer in webhook)
  url.searchParams.set('client_reference_id', customerEmail);

  // Add metadata if provided
  if (metadata) {
    Object.entries(metadata).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  return url.toString();
}

/**
 * Validate if a plan key is valid
 * @param plan - Plan identifier to validate
 * @returns true if plan exists
 */
export function isValidPlan(plan: string): plan is StripePlanKey {
  return plan in STRIPE_CHECKOUT_LINKS;
}
