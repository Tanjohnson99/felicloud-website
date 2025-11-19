/**
 * Felicloud Pricing Configuration
 *
 * This file defines all pricing plans for Felicloud.
 * Prices are used to dynamically create Stripe Checkout sessions.
 *
 * To change prices, simply update the values here and redeploy.
 * No need to configure anything in Stripe Dashboard!
 */

export interface PricingPlan {
  name: string;
  storage: string;
  price: number; // Price in cents (EUR)
  billing: 'monthly' | 'annual' | 'lifetime';
  interval: 'month' | 'year' | null; // null for one-time payments
  description: string;
}

export const PRICING_PLANS: Record<string, PricingPlan> = {
  // ========================================
  // MONTHLY PLANS
  // ========================================
  '500GB_Monthly': {
    name: 'Felicloud 500GB Monthly',
    storage: '500GB',
    price: 900, // 9.00 EUR
    billing: 'monthly',
    interval: 'month',
    description: '500GB secure cloud storage with monthly billing',
  },
  '1TB_Monthly': {
    name: 'Felicloud 1TB Monthly',
    storage: '1TB',
    price: 1500, // 15.00 EUR
    billing: 'monthly',
    interval: 'month',
    description: '1TB secure cloud storage with monthly billing',
  },
  '2TB_Monthly': {
    name: 'Felicloud 2TB Monthly',
    storage: '2TB',
    price: 2500, // 25.00 EUR
    billing: 'monthly',
    interval: 'month',
    description: '2TB secure cloud storage with monthly billing',
  },

  // ========================================
  // ANNUAL PLANS
  // ========================================
  '500GB_Annual': {
    name: 'Felicloud 500GB Annual',
    storage: '500GB',
    price: 9000, // 90.00 EUR (save 2 months)
    billing: 'annual',
    interval: 'year',
    description: '500GB secure cloud storage with annual billing',
  },
  '1TB_Annual': {
    name: 'Felicloud 1TB Annual',
    storage: '1TB',
    price: 15000, // 150.00 EUR (save 2 months)
    billing: 'annual',
    interval: 'year',
    description: '1TB secure cloud storage with annual billing',
  },
  '2TB_Annual': {
    name: 'Felicloud 2TB Annual',
    storage: '2TB',
    price: 25000, // 250.00 EUR (save 2 months)
    billing: 'annual',
    interval: 'year',
    description: '2TB secure cloud storage with annual billing',
  },

  // ========================================
  // LIFETIME PLANS (One-time payment)
  // ========================================
  '500GB_Lifetime': {
    name: 'Felicloud 500GB Lifetime',
    storage: '500GB',
    price: 29900, // 299.00 EUR
    billing: 'lifetime',
    interval: null, // One-time payment
    description: '500GB secure cloud storage - Pay once, use forever',
  },
  '1TB_Lifetime': {
    name: 'Felicloud 1TB Lifetime',
    storage: '1TB',
    price: 49900, // 499.00 EUR
    billing: 'lifetime',
    interval: null, // One-time payment
    description: '1TB secure cloud storage - Pay once, use forever',
  },
  '2TB_Lifetime': {
    name: 'Felicloud 2TB Lifetime',
    storage: '2TB',
    price: 79900, // 799.00 EUR
    billing: 'lifetime',
    interval: null, // One-time payment
    description: '2TB secure cloud storage - Pay once, use forever',
  },
};

export type PlanKey = keyof typeof PRICING_PLANS;

/**
 * Get pricing plan by key
 */
export function getPricingPlan(planKey: string): PricingPlan | null {
  return PRICING_PLANS[planKey] || null;
}

/**
 * Validate if a plan key exists
 */
export function isValidPlanKey(planKey: string): planKey is PlanKey {
  return planKey in PRICING_PLANS;
}

/**
 * Get all available plans
 */
export function getAllPlans(): PricingPlan[] {
  return Object.values(PRICING_PLANS);
}

/**
 * Get plans by billing type
 */
export function getPlansByBilling(billing: 'monthly' | 'annual' | 'lifetime'): PricingPlan[] {
  return getAllPlans().filter(plan => plan.billing === billing);
}
