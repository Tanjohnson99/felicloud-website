export default function PrivacyPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Privacy Policy</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-10 prose prose-lg max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Felicloud ("we," "our," or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you
            use our cloud storage services.
          </p>

          <h2>2. Information We Collect</h2>
          <h3>Personal Information</h3>
          <p>We may collect the following personal information:</p>
          <ul>
            <li>Email address</li>
            <li>Name (optional)</li>
            <li>Account credentials</li>
          </ul>

          <h3>Files and Content</h3>
          <p>
            We store the files and content you upload to our service. Your files are encrypted and
            only accessible by you.
          </p>

          <h3>Usage Data</h3>
          <p>We may collect information about how you use our service, including:</p>
          <ul>
            <li>Log data (IP address, browser type, access times)</li>
            <li>Device information</li>
            <li>Storage usage statistics</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Notify you about changes to our service</li>
            <li>Provide customer support</li>
            <li>Monitor service usage and performance</li>
            <li>Detect and prevent technical issues</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            data against unauthorized access, alteration, disclosure, or destruction. This includes:
          </p>
          <ul>
            <li>End-to-end encryption for your files</li>
            <li>Secure data centers located in the European Union</li>
            <li>Regular security audits</li>
            <li>Access controls and authentication</li>
          </ul>

          <h2>5. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to provide you with
            our service and as described in this Privacy Policy.
          </p>

          <h2>6. Your Rights (GDPR)</h2>
          <p>Under the GDPR, you have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request deletion of your personal data</li>
            <li>Object to processing of your personal data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2>7. Third-Party Services</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            We do not use tracking or analytics services that share your data with third parties.
          </p>

          <h2>8. Cookies</h2>
          <p>
            We use essential cookies necessary for the operation of our service. We do not use
            tracking cookies or third-party advertising cookies.
          </p>

          <h2>9. Children's Privacy</h2>
          <p>
            Our service is not directed to children under 16. We do not knowingly collect personal
            information from children under 16.
          </p>

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes
            by posting the new Privacy Policy on this page.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            privacy@felicloud.com
          </p>
        </div>
      </div>
    </div>
  );
}
