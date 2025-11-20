'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

export default function PricingPage() {
  const { t } = useTranslation('en');
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('lifetime');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('pricing.pageTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('pricing.pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Free Plan Banner - Featured */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-secondary p-12 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-32 w-32 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-40 w-40 rounded-full bg-white/5 blur-3xl"></div>

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <span className="text-6xl">🎉</span>
              </div>

              <h2 className="text-center text-4xl font-bold text-white mb-4">
                {t('pricing.startFree')}
              </h2>

              <p className="text-center text-xl text-blue-50 max-w-3xl mx-auto mb-8">
                {t('pricing.freePlanDescription')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{t('pricing.features.storage').replace('{{amount}}', '10 GB')}</div>
                  <div className="text-blue-100 text-sm">{t('common.lifetime')}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{t('pricing.features.traffic').replace('{{amount}}', '50 GB')}</div>
                  <div className="text-blue-100 text-sm">/ {t('common.month')}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">{t('pricing.features.unlimitedDevices')}</div>
                  <div className="text-blue-100 text-sm">Speed</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">100% EU</div>
                  <div className="text-blue-100 text-sm">{t('pricing.euHosted')}</div>
                </div>
              </div>

              <div className="text-center">
                <Link href="/en/signup">
                  <button className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-xl font-bold text-primary hover:bg-gray-50 transition-all shadow-2xl hover:scale-105 transform">
                    {t('pricing.createFreeAccount')}
                    <svg className="ml-3 h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </Link>

                <p className="mt-6 text-sm text-blue-100">
                  {t('pricing.freeApprovalNote')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Selector */}
      <section className="py-12 overflow-x-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">{t('pricing.needMoreSpace')}</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8">{t('pricing.chooseBilling')}</p>

            <div className="inline-flex rounded-xl border-2 border-gray-200 p-1.5 sm:p-2 bg-gray-50 max-w-full">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlan === 'monthly'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlan === 'annual'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{t('pricing.annual')}</span>
                <span className={`ml-1 sm:ml-2 text-xs sm:text-sm font-bold ${selectedPlan === 'annual' ? 'text-green-200' : 'text-green-600'}`}>{t('pricing.annualSave').replace('{{percent}}', '16')}</span>
              </button>
              <button
                onClick={() => setSelectedPlan('lifetime')}
                className={`px-2 sm:px-4 lg:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all cursor-pointer whitespace-nowrap ${
                  selectedPlan === 'lifetime'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <span>{t('pricing.lifetimeOption')}</span>
                <span className={`ml-1 sm:ml-2 text-xs sm:text-sm font-bold ${selectedPlan === 'lifetime' ? 'text-green-200' : 'text-green-600'}`}>{t('pricing.bestDeal')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Monthly Plans */}
          {selectedPlan === 'monthly' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Monthly */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900">500 GB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.monthly')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€4.99</span>
                  <span className="text-gray-600 ml-2">/ {t('common.month')}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€59.88 / {t('common.year')}</p>

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

                <Link href="/en/checkout?plan=500GB_Monthly&billing=monthly&storage=500GB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 1 TB Monthly */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  {t('pricing.mostPopular')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.monthly')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€7.99</span>
                  <span className="text-gray-600 ml-2">/ {t('common.month')}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€95.88 / {t('common.year')}</p>

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

                <Link href="/en/checkout?plan=1TB_Monthly&billing=monthly&storage=1TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 2 TB Monthly */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900">2 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.monthly')}</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€9.99</span>
                  <span className="text-gray-600 ml-2">/ {t('common.month')}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€119.88 / {t('common.year')}</p>

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

                <Link href="/en/checkout?plan=2TB_Monthly&billing=monthly&storage=2TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Annual Plans */}
          {selectedPlan === 'annual' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Annual */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '16')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500 GB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.annual')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€49.99</span>
                    <span className="text-xl text-gray-400 line-through">€59.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">{t('pricing.annual')}</p>

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

                <Link href="/en/checkout?plan=500GB_Annual&billing=annual&storage=500GB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 1 TB Annual */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  {t('pricing.mostPopular')}
                </div>
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '16')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.annual')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€79.99</span>
                    <span className="text-xl text-gray-400 line-through">€95.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">{t('pricing.annual')}</p>

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

                <Link href="/en/checkout?plan=1TB_Annual&billing=annual&storage=1TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 2 TB Annual */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '16')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.annual')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€99.99</span>
                    <span className="text-xl text-gray-400 line-through">€119.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">{t('pricing.annual')}</p>

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

                <Link href="/en/checkout?plan=2TB_Annual&billing=annual&storage=2TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Lifetime Plans */}
          {selectedPlan === 'lifetime' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Lifetime */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '74')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">500 GB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€79</span>
                    <span className="text-xl text-gray-400 line-through">€299.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

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

                <Link href="/en/checkout?plan=500GB_Lifetime&billing=lifetime&storage=500GB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 1 TB Lifetime */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  {t('pricing.mostPopular')}
                </div>
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '58')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€199</span>
                    <span className="text-xl text-gray-400 line-through">€479.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

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

                <Link href="/en/checkout?plan=1TB_Lifetime&billing=lifetime&storage=1TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>

              {/* 2 TB Lifetime */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="absolute -top-4 right-4 rounded-full bg-green-500 px-3 py-1 text-xs font-bold text-white">
                  {t('pricing.annualSave').replace('{{percent}}', '38')}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">2 TB</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">{t('pricing.lifetimeOption')}</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€369</span>
                    <span className="text-xl text-gray-400 line-through">€599.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

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

                <Link href="/en/checkout?plan=2TB_Lifetime&billing=lifetime&storage=2TB" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors font-semibold cursor-pointer">
                    {t('pricing.getStartedButton')}
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('pricing.faq.title')}
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('pricing.faq.q1')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('pricing.faq.a1')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('pricing.faq.q2')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('pricing.faq.a2')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('pricing.faq.q3')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('pricing.faq.a3')}
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{t('pricing.faq.q4')}</h3>
                <p className="mt-2 text-gray-600">
                  {t('pricing.faq.a4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
