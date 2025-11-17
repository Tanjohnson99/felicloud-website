'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual' | 'lifetime'>('lifetime');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Choose the plan that fits your needs. All plans include unlimited transfer speed and EU hosting.
            </p>
          </div>

          {/* Plan Selector */}
          <div className="mt-10 flex justify-center">
            <div className="inline-flex rounded-lg border border-gray-300 p-1 bg-gray-50">
              <button
                onClick={() => setSelectedPlan('monthly')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                  selectedPlan === 'monthly'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setSelectedPlan('annual')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                  selectedPlan === 'annual'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Annual
              </button>
              <button
                onClick={() => setSelectedPlan('lifetime')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all ${
                  selectedPlan === 'lifetime'
                    ? 'bg-white text-primary shadow-sm'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Lifetime
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Free Plan Banner */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="text-4xl">🎉</div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900">Get your free cloud account!</h2>
                <p className="mt-2 text-lg text-gray-600">
                  Enjoy 10 GB of secure cloud storage for free, forever!
                </p>
                <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    10 GB lifetime storage
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    50 GB traffic / month
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Unlimited transfer speed
                  </li>
                  <li className="flex items-center text-gray-700">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    Secure servers hosted in Europe
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-500">
                  Perfect to discover Felicloud with zero risk.
                </p>
                <p className="mt-2 text-sm text-amber-600 flex items-start gap-2">
                  <span>⚠️</span>
                  <span>Free accounts are subject to approval and may take up to 24h to be activated.</span>
                </p>
                <div className="mt-6">
                  <Link href="/en/signup">
                    <button className="inline-flex items-center justify-center rounded-lg font-semibold px-8 py-3 bg-primary text-white hover:bg-primary-dark transition-colors shadow-lg">
                      Get 10 GB Free
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Monthly Plans */}
          {selectedPlan === 'monthly' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Monthly */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">500 GB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Monthly</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€4.99</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€59.88 / year</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 1 TB Monthly */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Monthly</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€7.99</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€95.88 / year</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 2 TB Monthly */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">2 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Monthly</p>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-gray-900">€9.99</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">€119.88 / year</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Annual Plans */}
          {selectedPlan === 'annual' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Annual */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">500 GB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Annual</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€49.99</span>
                    <span className="text-2xl text-gray-400 line-through">€59.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">Yearly Payment</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 1 TB Annual */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Annual</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€79.99</span>
                    <span className="text-2xl text-gray-400 line-through">€95.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">Yearly Payment</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 2 TB Annual */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">2 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Annual</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€99.99</span>
                    <span className="text-2xl text-gray-400 line-through">€119.88</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">Yearly Payment</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          )}

          {/* Lifetime Plans */}
          {selectedPlan === 'lifetime' && (
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* 500 GB Lifetime */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">500 GB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Lifetime</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€79</span>
                    <span className="text-2xl text-gray-400 line-through">€299.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">500 GB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 1 TB Lifetime */}
              <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Lifetime</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€199</span>
                    <span className="text-2xl text-gray-400 line-through">€479.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">1 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg">
                    Get started
                  </button>
                </Link>
              </div>

              {/* 2 TB Lifetime */}
              <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900">2 TB Plan</h3>
                <p className="mt-2 text-sm font-semibold text-primary uppercase">Lifetime</p>
                <div className="mt-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-bold text-gray-900">€369</span>
                    <span className="text-2xl text-gray-400 line-through">€599.40</span>
                  </div>
                </div>
                <p className="mt-2 text-sm text-green-600 font-semibold">ONE-TIME PAYMENT</p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Storage</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">2 TB Shared traffic /month</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    <span className="ml-3 text-gray-600">Unlimited transfer speed</span>
                  </li>
                </ul>

                <Link href="/en/signup" className="mt-8 block">
                  <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                    Get started
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
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What does "lifetime" mean?</h3>
                <p className="mt-2 text-gray-600">
                  Lifetime means you pay once and can use your storage forever. No recurring fees, no expiration date.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Can I upgrade my plan later?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! You can upgrade from Free to a paid plan, or between different storage tiers at any time.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-2 text-gray-600">
                  We accept all major credit cards, PayPal, and SEPA bank transfers for European customers.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Is there a money-back guarantee?</h3>
                <p className="mt-2 text-gray-600">
                  Yes! We offer a 30-day money-back guarantee on all paid plans. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
