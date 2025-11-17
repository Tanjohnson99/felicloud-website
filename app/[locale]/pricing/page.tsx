'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Check = () => (
  <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function PricingPage() {
  const t = useTranslations('pricing');
  const locale = useLocale();

  const plans = [
    {
      key: 'free',
      features: ['storage', 'encryption', 'devices', 'sync', 'support', 'sharing', 'apps'],
    },
    {
      key: 'starter',
      popular: false,
      features: ['storage', 'encryption', 'devices', 'sync', 'support', 'sharing', 'versioning', 'apps'],
    },
    {
      key: 'plus',
      popular: true,
      features: ['storage', 'encryption', 'devices', 'sync', 'priority_support', 'sharing', 'versioning', 'apps'],
    },
    {
      key: 'pro',
      popular: false,
      features: ['storage', 'encryption', 'devices', 'sync', 'priority_support', 'sharing', 'versioning', 'apps'],
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('title')}
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white shadow-lg">
                    {t('popular')}
                  </span>
                </div>
              )}
              <Card className={plan.popular ? 'border-2 border-primary shadow-xl' : ''}>
                <CardHeader>
                  <CardTitle className="text-2xl">{t(`${plan.key}.name`)}</CardTitle>
                  <CardDescription>{t(`${plan.key}.description`)}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold text-gray-900">
                        €{t(`${plan.key}.price`)}
                      </span>
                      {plan.key !== 'free' && (
                        <span className="text-gray-600 text-sm">{t('per_year')}</span>
                      )}
                    </div>
                    <div className="mt-2 text-sm font-medium text-primary">
                      {t(`${plan.key}.storage`)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check />
                        <span className="text-sm text-gray-600">
                          {t(`features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href={`/${locale}/signup?plan=${plan.key}`} className="w-full">
                    <Button
                      className="w-full"
                      variant={plan.popular ? 'primary' : 'outline'}
                    >
                      {t('select')}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            {t('lifetime')} plans available. Pay once, use forever.
          </p>
        </div>
      </div>
    </div>
  );
}
