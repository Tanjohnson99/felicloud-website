/**
 * PLANS CONFIGURATION
 *
 * Maps Stripe plans to Nextcloud groups and quotas.
 * This makes it easy to add new plans (like special Black Friday offers).
 */

export type PlanType = 'free' | 'monthly' | 'annual' | 'lifetime';
export type PlanSize = '10GB' | '500GB' | '1TB' | '2TB' | '5TB' | '10TB' | '20TB';

export interface Plan {
  // Identifiers
  id: string;
  name: string;
  displayName: string;

  // Plan details
  type: PlanType;
  size: PlanSize;
  price: number; // in euros

  // Nextcloud configuration
  nextcloudGroup: string;
  quota: string;
  trafficLimit: string; // monthly traffic limit

  // Stripe
  stripePriceId?: string;

  // Features
  features: string[];
  popular?: boolean;
}

/**
 * ALL AVAILABLE PLANS
 *
 * Format: "SIZE TYPE" (e.g., "500GB Lifetime", "1TB Monthly", "20TB Annual")
 * This naming convention makes it flexible for special offers.
 */
export const plans: Record<string, Plan> = {
  // ===================================
  // FREE PLAN
  // ===================================
  'free': {
    id: 'free',
    name: '10GB Free',
    displayName: '10 GB Free',
    type: 'free',
    size: '10GB',
    price: 0,
    nextcloudGroup: '10GB Free',
    quota: '10GB',
    trafficLimit: '50GB',
    features: [
      '10 GB Storage',
      '50 GB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'End-to-End Encryption',
    ],
  },

  // ===================================
  // MONTHLY PLANS
  // ===================================
  '500GB_Monthly': {
    id: '500GB_Monthly',
    name: '500GB Monthly',
    displayName: '500 GB',
    type: 'monthly',
    size: '500GB',
    price: 4.99,
    nextcloudGroup: '500GB Monthly',
    quota: '500GB',
    trafficLimit: '500GB',
    stripePriceId: process.env.STRIPE_PRICE_500GB_MONTHLY,
    features: [
      '500 GB Storage',
      '500 GB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
    ],
  },

  '1TB_Monthly': {
    id: '1TB_Monthly',
    name: '1TB Monthly',
    displayName: '1 TB',
    type: 'monthly',
    size: '1TB',
    price: 7.99,
    nextcloudGroup: '1TB Monthly',
    quota: '1TB',
    trafficLimit: '1TB',
    stripePriceId: process.env.STRIPE_PRICE_1TB_MONTHLY,
    popular: true,
    features: [
      '1 TB Storage',
      '1 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
    ],
  },

  '2TB_Monthly': {
    id: '2TB_Monthly',
    name: '2TB Monthly',
    displayName: '2 TB',
    type: 'monthly',
    size: '2TB',
    price: 9.99,
    nextcloudGroup: '2TB Monthly',
    quota: '2TB',
    trafficLimit: '2TB',
    stripePriceId: process.env.STRIPE_PRICE_2TB_MONTHLY,
    features: [
      '2 TB Storage',
      '2 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
    ],
  },

  // ===================================
  // ANNUAL PLANS
  // ===================================
  '500GB_Annual': {
    id: '500GB_Annual',
    name: '500GB Annual',
    displayName: '500 GB',
    type: 'annual',
    size: '500GB',
    price: 49.99,
    nextcloudGroup: '500GB Annual',
    quota: '500GB',
    trafficLimit: '500GB',
    stripePriceId: process.env.STRIPE_PRICE_500GB_ANNUAL,
    features: [
      '500 GB Storage',
      '500 GB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'Save 16%',
    ],
  },

  '1TB_Annual': {
    id: '1TB_Annual',
    name: '1TB Annual',
    displayName: '1 TB',
    type: 'annual',
    size: '1TB',
    price: 79.99,
    nextcloudGroup: '1TB Annual',
    quota: '1TB',
    trafficLimit: '1TB',
    stripePriceId: process.env.STRIPE_PRICE_1TB_ANNUAL,
    popular: true,
    features: [
      '1 TB Storage',
      '1 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'Save 16%',
    ],
  },

  '2TB_Annual': {
    id: '2TB_Annual',
    name: '2TB Annual',
    displayName: '2 TB',
    type: 'annual',
    size: '2TB',
    price: 99.99,
    nextcloudGroup: '2TB Annual',
    quota: '2TB',
    trafficLimit: '2TB',
    stripePriceId: process.env.STRIPE_PRICE_2TB_ANNUAL,
    features: [
      '2 TB Storage',
      '2 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'Save 16%',
    ],
  },

  // ===================================
  // LIFETIME PLANS
  // ===================================
  '500GB_Lifetime': {
    id: '500GB_Lifetime',
    name: '500GB Lifetime',
    displayName: '500 GB',
    type: 'lifetime',
    size: '500GB',
    price: 79,
    nextcloudGroup: '500GB Lifetime',
    quota: '500GB',
    trafficLimit: '500GB',
    stripePriceId: process.env.STRIPE_PRICE_500GB_LIFETIME,
    features: [
      '500 GB Storage',
      '500 GB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'ONE-TIME PAYMENT',
      'Save 74%',
    ],
  },

  '1TB_Lifetime': {
    id: '1TB_Lifetime',
    name: '1TB Lifetime',
    displayName: '1 TB',
    type: 'lifetime',
    size: '1TB',
    price: 199,
    nextcloudGroup: '1TB Lifetime',
    quota: '1TB',
    trafficLimit: '1TB',
    stripePriceId: process.env.STRIPE_PRICE_1TB_LIFETIME,
    popular: true,
    features: [
      '1 TB Storage',
      '1 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'ONE-TIME PAYMENT',
      'Save 58%',
    ],
  },

  '2TB_Lifetime': {
    id: '2TB_Lifetime',
    name: '2TB Lifetime',
    displayName: '2 TB',
    type: 'lifetime',
    size: '2TB',
    price: 369,
    nextcloudGroup: '2TB Lifetime',
    quota: '2TB',
    trafficLimit: '2TB',
    stripePriceId: process.env.STRIPE_PRICE_2TB_LIFETIME,
    features: [
      '2 TB Storage',
      '2 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'Priority Support',
      'ONE-TIME PAYMENT',
      'Save 38%',
    ],
  },

  // ===================================
  // SPECIAL OFFERS (Example: Black Friday)
  // ===================================
  // Uncomment and configure when you have special offers
  /*
  '20TB_Annual_BlackFriday': {
    id: '20TB_Annual_BlackFriday',
    name: '20TB Annual - Black Friday',
    displayName: '20 TB Black Friday',
    type: 'annual',
    size: '20TB',
    price: 299,
    nextcloudGroup: '20TB Annual',
    quota: '20TB',
    trafficLimit: '20TB',
    stripePriceId: process.env.STRIPE_PRICE_20TB_ANNUAL_BF,
    features: [
      '20 TB Storage',
      '20 TB Traffic/month',
      'Unlimited Speed',
      '100% EU Hosted',
      'VIP Support',
      'Save 70% - Black Friday Only!',
    ],
  },
  */
};

/**
 * Helper: Get plan by ID
 */
export function getPlanById(planId: string): Plan | undefined {
  return plans[planId];
}

/**
 * Helper: Get plan by Stripe Price ID
 */
export function getPlanByStripePriceId(stripePriceId: string): Plan | undefined {
  return Object.values(plans).find(plan => plan.stripePriceId === stripePriceId);
}

/**
 * Helper: Get all plans by type
 */
export function getPlansByType(type: PlanType): Plan[] {
  return Object.values(plans).filter(plan => plan.type === type);
}

/**
 * Helper: Get upgrade path (what plans can a user upgrade to from current plan)
 */
export function getUpgradePlans(currentPlanId: string): Plan[] {
  const currentPlan = getPlanById(currentPlanId);
  if (!currentPlan) return [];

  // Free users can upgrade to any paid plan
  if (currentPlan.type === 'free') {
    return Object.values(plans).filter(p => p.type !== 'free');
  }

  // Paid users can upgrade to larger size or better type
  return Object.values(plans).filter(plan => {
    if (plan.type === 'free') return false;
    if (plan.id === currentPlanId) return false;

    // Can upgrade to same size but better type (free -> monthly -> annual -> lifetime)
    const typeOrder: Record<PlanType, number> = { free: 0, monthly: 1, annual: 2, lifetime: 3 };
    const sizeOrder: Record<PlanSize, number> = { '10GB': 0, '500GB': 1, '1TB': 2, '2TB': 3, '5TB': 4, '10TB': 5, '20TB': 6 };

    return sizeOrder[plan.size] >= sizeOrder[currentPlan.size] ||
           (plan.size === currentPlan.size && typeOrder[plan.type] > typeOrder[currentPlan.type]);
  });
}
