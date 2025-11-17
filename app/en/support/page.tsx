export default function SupportPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Support Center
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get help with Felicloud. Browse our FAQ or contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Find answers to common questions about Felicloud
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">How do I get started with Felicloud?</h3>
                <p className="mt-4 text-gray-600">
                  Getting started is easy! Sign up for a free account, download our app for your device, and start uploading your files.
                  Your free 10 GB account will be activated within 24 hours after approval.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">What devices are supported?</h3>
                <p className="mt-4 text-gray-600">
                  Felicloud works on Windows, macOS, Linux, Android, iOS, and any web browser. You can also connect via WebDAV for
                  maximum compatibility with third-party apps.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">How secure is my data?</h3>
                <p className="mt-4 text-gray-600">
                  All your files are protected with end-to-end encryption. Data is stored on servers located exclusively in Europe,
                  complying with GDPR regulations. Only you have access to your encryption keys.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">Can I upgrade or downgrade my plan?</h3>
                <p className="mt-4 text-gray-600">
                  Yes! You can upgrade from a free account to any paid plan, or upgrade between storage tiers at any time.
                  For lifetime plans, you'll only pay the difference when upgrading.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">What payment methods do you accept?</h3>
                <p className="mt-4 text-gray-600">
                  We accept all major credit cards (Visa, Mastercard, Amex), PayPal, and SEPA bank transfers for European customers.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">Do you offer refunds?</h3>
                <p className="mt-4 text-gray-600">
                  Yes! We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, contact us within 30 days
                  of your purchase for a full refund, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Still need help?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our support team is here to help you
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/en/contact"
                className="rounded-lg bg-primary px-8 py-3 text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg"
              >
                Contact Support
              </a>
              <a
                href="/en/help"
                className="rounded-lg border-2 border-primary px-8 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
