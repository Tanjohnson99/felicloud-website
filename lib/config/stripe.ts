/**
 * Stripe Checkout Configuration
 *
 * This file contains all Stripe Checkout links for Felicloud plans.
 * These links are used throughout the application for payment processing.
 *
 * IMPORTANT: Replace these with your TEST links when testing
 * Get test links from: https://dashboard.stripe.com/test/products
 *
 * METADATA CONFIGURATION:
 * Each product in Stripe Dashboard must have these metadata fields:
 * - action: "create" (or "upgrade" for upgrade flows)
 * - plan: The key from this object (e.g., "1TB_Lifetime")
 * - billing: "monthly", "annual", or "lifetime"
 * - storage: The storage size (e.g., "1TB", "500GB")
 */

export const STRIPE_CHECKOUT_LINKS = {
  // Monthly Plans - REPLACE WITH YOUR TEST LINKS
  '500GB_Monthly': 'https://buy.stripe.com/test/xxxxxxxxxxxxx', // TODO: Replace
  '1TB_Monthly': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',   // TODO: Replace
  '2TB_Monthly': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',   // TODO: Replace

  // Annual Plans - REPLACE WITH YOUR TEST LINKS
  '500GB_Annual': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',  // TODO: Replace
  '1TB_Annual': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',    // TODO: Replace
  '2TB_Annual': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',    // TODO: Replace

  // Lifetime Plans - REPLACE WITH YOUR TEST LINKS
  '500GB_Lifetime': 'https://buy.stripe.com/test/xxxxxxxxxxxxx', // TODO: Replace
  '1TB_Lifetime': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',   // TODO: Replace
  '2TB_Lifetime': 'https://buy.stripe.com/test/xxxxxxxxxxxxx',   // TODO: Replace
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
