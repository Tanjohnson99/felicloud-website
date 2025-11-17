export default function PricingPage() {
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
              Pay once, use forever. No recurring fees, no hidden costs.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">Free</h3>
              <p className="mt-4 text-sm text-gray-600">Perfect to get started</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€0</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Forever</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">10 GB Storage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">All devices</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">EU servers</span>
                </li>
              </ul>

              <a href="/en/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </a>
            </div>

            {/* Lifetime 100GB Plan */}
            <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Lifetime 100GB</h3>
              <p className="mt-4 text-sm text-gray-600">One-time payment</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€99</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Pay once, use forever</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600"><strong>100 GB Storage</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">All devices</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">EU servers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Priority support</span>
                </li>
              </ul>

              <a href="/en/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg">
                  Get Started
                </button>
              </a>
            </div>

            {/* Lifetime 1TB Plan */}
            <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">Lifetime 1TB</h3>
              <p className="mt-4 text-sm text-gray-600">One-time payment</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€299</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Pay once, use forever</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600"><strong>1 TB Storage</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">All devices</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">End-to-end encryption</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">EU servers</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Dedicated support</span>
                </li>
              </ul>

              <a href="/en/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
          </div>
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
                  Yes! You can upgrade from Free to a Lifetime plan, or from 100GB to 1TB at any time. Just pay the difference.
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
                  Yes! We offer a 30-day money-back guarantee on all lifetime plans. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
