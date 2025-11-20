export default function GDPRPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            GDPR Compliance
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            How Felicloud protects your rights under European data protection law
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">GDPR by Design</h2>
              <p className="mt-4">
                Felicloud is built from the ground up with GDPR compliance at its core. We don't just comply with the law – we embrace its principles of privacy, transparency, and user rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">1. Lawful Basis for Processing</h2>
              <p className="mt-4">
                We process your personal data based on:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li><strong>Contract:</strong> To provide cloud storage services you've signed up for</li>
                <li><strong>Legitimate Interest:</strong> To prevent fraud and maintain service security</li>
                <li><strong>Legal Obligation:</strong> To comply with EU laws and regulations</li>
                <li><strong>Consent:</strong> For optional features like marketing emails (opt-in only)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">2. Data Minimization</h2>
              <p className="mt-4">
                We collect only the minimum data necessary to provide our service:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Email address (required for account access)</li>
                <li>Password (encrypted, never stored in plain text)</li>
                <li>Payment details (only for lifetime plans, processed by GDPR-compliant providers)</li>
                <li>Storage usage (to enforce quotas)</li>
              </ul>
              <p className="mt-4">
                We never ask for unnecessary information. We never track you across the web. We never build advertising profiles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">3. Your GDPR Rights</h2>
              <p className="mt-4">
                You have full control over your data:
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Access (Art. 15)</h3>
                  <p className="mt-2">
                    Request a copy of all personal data we hold about you. We'll provide it in a readable format within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Rectification (Art. 16)</h3>
                  <p className="mt-2">
                    Correct any inaccurate data through your account settings or by contacting us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Erasure (Art. 17)</h3>
                  <p className="mt-2">
                    Delete your account and all associated data. We'll permanently erase everything within 30 days.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Data Portability (Art. 20)</h3>
                  <p className="mt-2">
                    Export all your files in their original format. You own your data, not us.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Object (Art. 21)</h3>
                  <p className="mt-2">
                    Object to any processing of your data. We'll stop unless we have compelling legitimate grounds.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Right to Restrict Processing (Art. 18)</h3>
                  <p className="mt-2">
                    Limit how we use your data while you dispute its accuracy or lawfulness.
                  </p>
                </div>
              </div>

              <p className="mt-6 font-semibold">
                To exercise any of these rights, email us at: gdpr@felicloud.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">4. Data Location</h2>
              <p className="mt-4">
                All your data is stored exclusively in European Union data centers. Your data never leaves EU jurisdiction.
              </p>
              <p className="mt-4">
                Our servers are located in:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Germany (primary)</li>
                <li>France (backup)</li>
              </ul>
              <p className="mt-4">
                We do not use US cloud providers or services subject to the CLOUD Act.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">5. Data Security</h2>
              <p className="mt-4">
                We implement state-of-the-art security measures:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>End-to-end encryption (AES-256)</li>
                <li>TLS 1.3 for data in transit</li>
                <li>Regular security audits and penetration testing</li>
                <li>ISO 27001 certified infrastructure</li>
                <li>24/7 security monitoring</li>
                <li>Automatic security updates</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">6. Data Breach Notification</h2>
              <p className="mt-4">
                In the unlikely event of a data breach:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>We'll notify the relevant supervisory authority within 72 hours</li>
                <li>We'll notify affected users immediately if there's a risk to their rights</li>
                <li>We'll provide clear information about the breach and remediation steps</li>
              </ul>
              <p className="mt-4">
                Note: Due to end-to-end encryption, even in a breach scenario, your file contents remain secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">7. Third-Party Processors</h2>
              <p className="mt-4">
                We use minimal third-party services, all GDPR compliant:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Payment processors (Stripe, PayPal) - EU entities with data processing agreements</li>
                <li>Email service - EU-based, GDPR compliant</li>
              </ul>
              <p className="mt-4">
                All processors are bound by strict data processing agreements (DPAs) and regular audits.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">8. Supervisory Authority</h2>
              <p className="mt-4">
                If you have concerns about our data practices, you have the right to lodge a complaint with your national data protection authority.
              </p>
              <p className="mt-4">
                EU Data Protection Authorities:{' '}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Find your authority
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">9. Data Protection Officer</h2>
              <p className="mt-4">
                Our Data Protection Officer oversees GDPR compliance and is available to answer your questions:
              </p>
              <p className="mt-2">
                Email: dpo@felicloud.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">10. Transparency</h2>
              <p className="mt-4">
                We believe in radical transparency:
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>Our platform is built on open-source Nextcloud</li>
                <li>We publish transparency reports (coming soon)</li>
                <li>We've never received a National Security Letter or FISA warrant</li>
                <li>We've never provided user data to government agencies except when legally compelled by EU law</li>
              </ul>
            </section>

            <section className="mt-12 rounded-2xl bg-primary/10 p-8">
              <h2 className="text-2xl font-bold text-gray-900">Questions?</h2>
              <p className="mt-4">
                If you have questions about GDPR compliance or want to exercise your rights:
              </p>
              <p className="mt-4 font-semibold">
                Email: gdpr@felicloud.com
              </p>
              <p className="mt-2">
                We respond to all requests within 30 days as required by GDPR.
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
