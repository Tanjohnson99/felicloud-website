export default function TermsPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Terms of Service</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 prose prose-lg max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using Felicloud services, you accept and agree to be bound by the terms
            and provision of this agreement.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily access the materials (information or software) on
            Felicloud's services for personal, non-commercial transitory viewing only.
          </p>

          <h2>3. Privacy and Data Protection</h2>
          <p>
            Your privacy is important to us. Please review our Privacy Policy to understand how we
            collect, use, and protect your personal information in compliance with GDPR.
          </p>

          <h2>4. User Responsibilities</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any portion of the service</li>
            <li>Upload malicious code or spam</li>
            <li>Violate any applicable laws or regulations</li>
          </ul>

          <h2>5. Service Availability</h2>
          <p>
            We strive to provide reliable service but do not guarantee uninterrupted access. We
            reserve the right to modify or discontinue the service with or without notice.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Felicloud shall not be liable for any indirect, incidental, special, consequential or
            punitive damages resulting from your use of or inability to use the service.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to update these terms at any time. Continued use of the service
            after changes constitutes acceptance of the new terms.
          </p>

          <h2>8. Contact</h2>
          <p>
            For questions about these Terms of Service, please contact us at support@felicloud.com
          </p>
        </div>
      </div>
    </div>
  );
}
