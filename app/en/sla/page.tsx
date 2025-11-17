export default function SLAPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Service Level Agreement
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to reliability and uptime
            </p>
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-green-600">99.9%</div>
                <div>
                  <div className="text-xl font-bold text-gray-900">Uptime Guarantee</div>
                  <div className="text-gray-600 mt-1">We guarantee 99.9% service availability</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>Our SLA Commitment</h2>
              <p>
                Felicloud is committed to providing reliable and highly available cloud storage services.
                We guarantee a minimum uptime of 99.9% for our platform.
              </p>

              <h3>What does 99.9% uptime mean?</h3>
              <ul>
                <li><strong>Monthly:</strong> Maximum of 43.2 minutes of downtime</li>
                <li><strong>Quarterly:</strong> Maximum of 2.16 hours of downtime</li>
                <li><strong>Yearly:</strong> Maximum of 8.64 hours of downtime</li>
              </ul>

              <h3>Exclusions</h3>
              <p>Our SLA does not cover downtime caused by:</p>
              <ul>
                <li>Scheduled maintenance (announced at least 48 hours in advance)</li>
                <li>Issues caused by your internet service provider</li>
                <li>Force majeure events beyond our control</li>
                <li>Denial of service attacks or similar security incidents</li>
              </ul>

              <h3>Service Credits</h3>
              <p>
                If we fail to meet our 99.9% uptime guarantee, you may be eligible for service credits
                according to the following schedule:
              </p>
              <ul>
                <li><strong>99.0% - 99.9% uptime:</strong> 10% service credit</li>
                <li><strong>95.0% - 99.0% uptime:</strong> 25% service credit</li>
                <li><strong>Below 95.0% uptime:</strong> 50% service credit</li>
              </ul>

              <p className="text-sm text-gray-600">
                Service credits apply to monthly and annual subscriptions. Lifetime plans receive a prorated credit
                based on equivalent monthly value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uptime Status */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Real-Time Status
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Monitor our service availability in real-time
            </p>
          </div>

          {/* UptimeKuma Dashboard Embed */}
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
              <div className="aspect-[16/10] w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <p className="text-gray-900 font-semibold mb-2">UptimeKuma Status Dashboard</p>
                  <p className="text-gray-600 text-sm mb-4">
                    The real-time status dashboard will be embedded here
                  </p>
                  <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4 inline-block">
                    <code className="text-primary">
                      {'<iframe src="https://status.felicloud.com" />'}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              For detailed historical data, visit our status page at{' '}
              <a href="https://status.felicloud.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                status.felicloud.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-16 sm:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Questions about our SLA?
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Our team is here to answer any questions about service availability
              </p>
              <div className="mt-10">
                <a
                  href="/en/support"
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors shadow-lg inline-block"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
