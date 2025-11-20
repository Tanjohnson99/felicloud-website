export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: January 2024
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Agreement to Terms</h2>
              <p className="mt-4">
                By accessing and using Felicloud, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Use License</h2>
              <p className="mt-4">
                Felicloud grants you a personal, non-transferable, non-exclusive license to use our cloud storage service subject to these terms.
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>You may upload, store, and share files within your storage quota</li>
                <li>You must not use the service for illegal activities</li>
                <li>You must not share copyrighted material without permission</li>
                <li>You must not attempt to harm our infrastructure or other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Account Responsibilities</h2>
              <p className="mt-4">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
              </p>
              <p className="mt-4">
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Lifetime Plans</h2>
              <p className="mt-4">
                "Lifetime" means that your paid storage plan will remain active for as long as Felicloud operates as a service, subject to these terms.
              </p>
              <p className="mt-4">
                We reserve the right to modify storage quotas or features with reasonable notice, but will always provide equivalent or better value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Acceptable Use</h2>
              <p className="mt-4">
                You agree not to use Felicloud to:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Store or distribute malware, viruses, or harmful code</li>
                <li>Harass, abuse, or harm others</li>
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Send spam or unsolicited communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Data Privacy</h2>
              <p className="mt-4">
                Your privacy is important to us. Please review our{' '}
                <a href="/pt/legal/privacy/" className="text-primary hover:underline">
                  Privacy Policy
                </a>{' '}
                to understand how we collect, use, and protect your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Service Availability</h2>
              <p className="mt-4">
                We strive to provide 99.9% uptime but do not guarantee uninterrupted service. We may perform maintenance with advance notice when possible.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Termination</h2>
              <p className="mt-4">
                We may suspend or terminate your account if you violate these terms. You may close your account at any time.
              </p>
              <p className="mt-4">
                For lifetime plan refunds, please see our 30-day money-back guarantee policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Limitation of Liability</h2>
              <p className="mt-4">
                Felicloud is provided "as is" without warranties of any kind. We are not liable for any data loss, damages, or losses arising from your use of the service.
              </p>
              <p className="mt-4">
                We strongly recommend maintaining local backups of important files.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">10. Governing Law</h2>
              <p className="mt-4">
                These terms are governed by the laws of the European Union and the jurisdiction where Felicloud operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">11. Changes to Terms</h2>
              <p className="mt-4">
                We may update these terms from time to time. We will notify you of significant changes via email or service notifications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">12. Contact</h2>
              <p className="mt-4">
                If you have questions about these terms, please contact us at: legal@felicloud.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
