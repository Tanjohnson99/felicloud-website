export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Last updated: January 2024
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
              <p className="mt-4">
                At Felicloud, your privacy is our top priority. We believe your data belongs to you, and only you. This policy explains what data we collect, why we collect it, and how we protect it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Data We Collect</h2>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Account Information</h3>
              <p className="mt-2">
                When you create an account, we collect:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Email address (for account access and communication)</li>
                <li>Name (optional, for personalization)</li>
                <li>Password (encrypted and never stored in plain text)</li>
                <li>Payment information (processed by secure third-party providers, we don't store card details)</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Usage Data</h3>
              <p className="mt-2">
                We collect minimal usage data to operate and improve our service:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Storage usage (to enforce quotas)</li>
                <li>Login times and IP addresses (for security)</li>
                <li>Error logs (to fix bugs and improve reliability)</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">Your Files</h3>
              <p className="mt-2">
                Your files are encrypted end-to-end. We cannot see, read, or access your file contents. We only store encrypted data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Data</h2>
              <p className="mt-4">
                We use your data only for:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Providing and maintaining our cloud storage service</li>
                <li>Communicating important service updates</li>
                <li>Processing payments for lifetime plans</li>
                <li>Preventing fraud and abuse</li>
                <li>Improving our service and fixing bugs</li>
              </ul>
              <p className="mt-4 font-semibold">
                We never sell your data. We never use your data for advertising. We never share your data with third parties except as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Data Storage and Security</h2>
              <p className="mt-4">
                All data is stored in European data centers subject to strict EU data protection laws.
              </p>
              <p className="mt-4">
                Security measures include:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>End-to-end encryption (AES-256)</li>
                <li>TLS 1.3 for data in transit</li>
                <li>Regular security audits</li>
                <li>ISO 27001 certified infrastructure</li>
                <li>Two-factor authentication (optional)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Your Rights (GDPR)</h2>
              <p className="mt-4">
                Under GDPR, you have the right to:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li><strong>Access:</strong> Request a copy of all your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Erasure:</strong> Delete your account and all associated data</li>
                <li><strong>Portability:</strong> Export your data in a standard format</li>
                <li><strong>Object:</strong> Object to processing of your data</li>
                <li><strong>Restrict:</strong> Restrict how we use your data</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, contact us at: privacy@felicloud.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Data Retention</h2>
              <p className="mt-4">
                We retain your data as long as your account is active. When you delete your account:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>All files are permanently deleted within 30 days</li>
                <li>Account data is deleted within 90 days</li>
                <li>Backups are purged within 180 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Cookies</h2>
              <p className="mt-4">
                We use only essential cookies required for the service to function:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Session cookies (to keep you logged in)</li>
                <li>Security cookies (to prevent CSRF attacks)</li>
              </ul>
              <p className="mt-4">
                We do not use tracking cookies or analytics cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Third-Party Services</h2>
              <p className="mt-4">
                We use minimal third-party services:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Payment processors (Stripe, PayPal) - for billing only</li>
                <li>Email service (for transactional emails only)</li>
              </ul>
              <p className="mt-4">
                All third parties are GDPR compliant and bound by strict data processing agreements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Children's Privacy</h2>
              <p className="mt-4">
                Felicloud is not intended for children under 16. We do not knowingly collect data from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Changes to This Policy</h2>
              <p className="mt-4">
                We may update this policy from time to time. We will notify you of significant changes via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">10. Contact Us</h2>
              <p className="mt-4">
                For privacy questions or to exercise your rights:
              </p>
              <p className="mt-2">
                Email: privacy@felicloud.com
              </p>
              <p className="mt-2">
                Data Protection Officer: dpo@felicloud.com
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
