# Stripe Checkout Links

This file contains all Stripe Checkout payment links for Felicloud plans.

## Monthly Plans

- **500GB Monthly**: https://buy.stripe.com/14A8wP7iCbLE4Ae2m5fbq05
- **1TB Monthly**: https://buy.stripe.com/4gMbJ10Ue6rkc2Gd0Jfbq0a
- **2TB Monthly**: https://buy.stripe.com/4gMdR9dH0cPI8Qu8Ktfbq0b

## Annual Plans

- **500GB Annual**: https://buy.stripe.com/aFaaEX9qK6rk2s66Clfbq06
- **1TB Annual**: https://buy.stripe.com/aFaeVd6ey5nggiWf8Rfbq09
- **2TB Annual**: https://buy.stripe.com/9B628rauO2b45EiaSBfbq0c

## Lifetime Plans

- **500GB Lifetime**: https://buy.stripe.com/3cI7sL7iC6rk4Ae4udfbq07
- **1TB Lifetime**: https://buy.stripe.com/3cIfZhdH06rk6Im9Oxfbq08
- **2TB Lifetime**: https://buy.stripe.com/5kQeVd0UecPI8Qu4udfbq0d

## Usage in Code

These links are mapped in `/lib/config/stripe.ts` for easy reference throughout the application.

## Payment Flow

1. User selects plan on pricing page
2. Redirected to checkout page with plan parameters
3. Email verification (check if existing free account = upgrade, or new user = creation)
4. Redirect to appropriate Stripe Checkout link with customer email
5. After successful payment, Stripe webhook triggers account creation/upgrade
6. User redirected to success page with account details
