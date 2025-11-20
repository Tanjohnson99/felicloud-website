export default function IntellectualPropertyPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Intellectual Property Policy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>1. Overview</h2>
            <p>
              Felicloud respects the intellectual property rights of others and expects our users to do the same.
              This Intellectual Property Policy outlines our procedures for addressing claims of copyright infringement
              and other intellectual property violations.
            </p>

            <h2>2. Copyright Infringement</h2>
            <p>
              If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement
              and is accessible via our service, please notify us by providing the following information:
            </p>
            <ul>
              <li>A physical or electronic signature of the copyright owner or person authorized to act on their behalf</li>
              <li>Identification of the copyrighted work claimed to have been infringed</li>
              <li>Identification of the material that is claimed to be infringing or to be the subject of infringing activity</li>
              <li>Your contact information, including your address, telephone number, and email address</li>
              <li>A statement that you have a good faith belief that use of the material is not authorized by the copyright owner</li>
              <li>A statement that the information in the notification is accurate and that you are authorized to act on behalf of the copyright owner</li>
            </ul>

            <h2>3. Counter-Notification</h2>
            <p>
              If you believe that your content was removed or disabled by mistake or misidentification, you may file a
              counter-notification with us by providing the following information:
            </p>
            <ul>
              <li>Your physical or electronic signature</li>
              <li>Identification of the content that has been removed or disabled</li>
              <li>A statement under penalty of perjury that you have a good faith belief that the content was removed by mistake</li>
              <li>Your name, address, and telephone number</li>
              <li>A statement that you consent to the jurisdiction of the courts in your location</li>
            </ul>

            <h2>4. Repeat Infringers</h2>
            <p>
              Felicloud will terminate the accounts of users who are determined to be repeat infringers of intellectual
              property rights.
            </p>

            <h2>5. Trademark Policy</h2>
            <p>
              Using another company's trademark in a way that may mislead or confuse others about brand affiliation is
              not allowed. If you believe someone is infringing your trademark rights, please contact us with detailed
              information about your claim.
            </p>

            <h2>6. Contact Information</h2>
            <p>
              For copyright or other intellectual property concerns, please contact us at:
            </p>
            <div className="not-prose rounded-lg bg-gray-50 p-6 my-6">
              <p className="text-gray-900 font-semibold">Legal Department - Intellectual Property</p>
              <p className="text-gray-600 mt-2">Email: legal@felicloud.com</p>
              <p className="text-gray-600">Subject line: "IP Claim - [Your Company/Name]"</p>
            </div>

            <h2>7. Response Time</h2>
            <p>
              We will review all valid intellectual property claims and respond within 5-7 business days. In cases of
              clear infringement, we may take action sooner.
            </p>

            <h2>8. User Responsibilities</h2>
            <p>
              Users are responsible for ensuring that they have the necessary rights to upload, store, and share content
              on Felicloud. By using our service, you agree not to infringe on the intellectual property rights of others.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Intellectual Property Policy from time to time. We will notify users of any material
              changes via email or through our service.
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/20 p-8">
            <h3 className="text-xl font-bold text-gray-900">Need to report an infringement?</h3>
            <p className="mt-4 text-gray-600">
              If you have a valid intellectual property claim, please contact our legal team at{' '}
              <a href="mailto:legal@felicloud.com" className="text-primary hover:underline font-semibold">
                legal@felicloud.com
              </a>
            </p>
            <div className="mt-6">
              <a
                href="/pt/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
