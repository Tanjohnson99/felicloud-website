'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

/**
 * UPGRADE ACCOUNT PAGE
 *
 * Allows users with existing free accounts to upgrade to paid plans.
 * This page will be integrated with Stripe and Nextcloud API.
 */

export default function UpgradeAccountPage() {
  const { t } = useTranslation('pt');
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('lifetime');
  const [isLoading, setIsLoading] = useState(false);

  // TODO: Get current user's plan from session/API
  const currentPlan = {
    name: '10GB Free',
    size: '10 GB',
  };

  const handleUpgrade = async (planId: string) => {
    setIsLoading(true);

    try {
      // TODO: Call API to create Stripe checkout session
      // const response = await fetch('/api/checkout/create-session', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ planId, mode: 'upgrade' }),
      // });
      // const { sessionUrl } = await response.json();
      // window.location.href = sessionUrl;

      console.log('Upgrading to plan:', planId);
      // For now, just log
    } catch (error) {
      console.error('Upgrade error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 border border-green-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {t('upgrade.currentPlan')}: {currentPlan.name}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('upgrade.pageTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('upgrade.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits of Upgrading */}
      <section className="py-12 bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{t('upgrade.benefits.moreStorage.title')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('upgrade.benefits.moreStorage.description')}</p>
            </div>
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{t('upgrade.benefits.unlimitedSpeed.title')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('upgrade.benefits.unlimitedSpeed.description')}</p>
            </div>
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{t('upgrade.benefits.prioritySupport.title')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('upgrade.benefits.prioritySupport.description')}</p>
            </div>
            <div className="text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary mx-auto mb-3">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900">{t('upgrade.benefits.bestValue.title')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('upgrade.benefits.bestValue.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex rounded-xl border-2 border-gray-200 p-2 bg-gray-50">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-8 py-3 rounded-lg text-base font-semibold transition-all ${
                  selectedPlan === 'monthly'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`px-8 py-3 rounded-lg text-base font-semibold transition-all ${
                  selectedPlan === 'annual'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{t('pricing.annual')}</span>
                <span className={`ml-2 text-sm font-bold ${selectedPlan === 'annual' ? 'text-green-200' : 'text-green-600'}`}>{t('pricing.annualSave').replace('{{percent}}', '16')}</span>
              </button>
              <button
                onClick={() => setSelectedPlan('lifetime')}
                className={`px-8 py-3 rounded-lg text-base font-semibold transition-all ${
                  selectedPlan === 'lifetime'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{t('pricing.lifetimeOption')}</span>
                <span className={`ml-2 text-sm font-bold ${selectedPlan === 'lifetime' ? 'text-green-200' : 'text-green-600'}`}>{t('pricing.bestDeal')}</span>
              </button>
            </div>
          </div>

          {/* Pricing Cards - Lifetime */}
          {selectedPlan === 'lifetime' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-primary transition-all">
                <h3 className="text-2xl font-bold text-gray-900">500 GB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€79</span>
                  <p className="mt-2 text-sm text-green-600 font-semibold">{t('upgrade.oneTimePayment')}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.storage').replace('{{amount}}', '500 GB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.traffic').replace('{{amount}}', '500 GB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.unlimitedDevices')}</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleUpgrade('500GB_Lifetime')}
                  disabled={isLoading}
                  className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
                >
                  {t('upgrade.upgradeNow')}
                </button>
              </div>

              {/* 1 TB - Popular */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  {t('pricing.mostPopular')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€199</span>
                  <p className="mt-2 text-sm text-green-600 font-semibold">{t('upgrade.oneTimePayment')}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.storage').replace('{{amount}}', '1 TB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.traffic').replace('{{amount}}', '1 TB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.unlimitedDevices')}</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleUpgrade('1TB_Lifetime')}
                  disabled={isLoading}
                  className="mt-8 w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary/90 transition-colors shadow-lg font-semibold disabled:opacity-50"
                >
                  {t('upgrade.upgradeNow')}
                </button>
              </div>

              {/* 2 TB */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl hover:border-primary transition-all">
                <h3 className="text-2xl font-bold text-gray-900">2 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€369</span>
                  <p className="mt-2 text-sm text-green-600 font-semibold">{t('upgrade.oneTimePayment')}</p>
                </div>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.storage').replace('{{amount}}', '2 TB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.traffic').replace('{{amount}}', '2 TB')}</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">{t('pricing.features.unlimitedDevices')}</span>
                  </li>
                </ul>

                <button
                  onClick={() => handleUpgrade('2TB_Lifetime')}
                  disabled={isLoading}
                  className="mt-8 w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50"
                >
                  {t('upgrade.upgradeNow')}
                </button>
              </div>
            </div>
          )}

          {/* TODO: Add Monthly and Annual cards similar to above */}
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 shadow-lg border-2 border-green-500">
              <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="text-left">
                <div className="font-bold text-gray-900">{t('upgrade.guarantee.title')}</div>
                <div className="text-sm text-gray-600">{t('upgrade.guarantee.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('pricing.faq.title')}
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('upgrade.faq.q1')}
              </h3>
              <p className="text-gray-600">
                {t('upgrade.faq.a1')}
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('upgrade.faq.q2')}
              </h3>
              <p className="text-gray-600">
                {t('upgrade.faq.a2')}
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t('upgrade.faq.q3')}
              </h3>
              <p className="text-gray-600">
                {t('upgrade.faq.a3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
