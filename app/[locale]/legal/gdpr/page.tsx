export default function GDPRPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">GDPR Compliance</h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Felicloud's commitment to the General Data Protection Regulation (GDPR)
        </p>

        <div className="mt-10 prose prose-lg max-w-none">
          <h2>Our GDPR Commitment</h2>
          <p>
            Felicloud is fully committed to compliance with the General Data Protection Regulation
            (GDPR). We believe privacy is a fundamental right, and we've built our service with
            privacy and data protection at its core.
          </p>

          <h2>EU Data Residency</h2>
          <p>
            All data stored with Felicloud is hosted exclusively on servers located within the
            European Union. Your data never leaves EU jurisdiction, ensuring compliance with GDPR
            data transfer requirements.
          </p>

          <h2>Data Protection Principles</h2>
          <p>We adhere to the following GDPR principles:</p>
          <ul>
            <li>
              <strong>Lawfulness, fairness and transparency:</strong> We process data lawfully and
              transparently
            </li>
            <li>
              <strong>Purpose limitation:</strong> We collect data only for specified, explicit
              purposes
            </li>
            <li>
              <strong>Data minimization:</strong> We collect only the minimum data necessary
            </li>
            <li>
              <strong>Accuracy:</strong> We keep personal data accurate and up to date
            </li>
            <li>
              <strong>Storage limitation:</strong> We retain data only as long as necessary
            </li>
            <li>
              <strong>Integrity and confidentiality:</strong> We protect data with appropriate
              security measures
            </li>
            <li>
              <strong>Accountability:</strong> We can demonstrate compliance with GDPR
            </li>
          </ul>

          <h2>Your GDPR Rights</h2>
          <p>Under GDPR, you have the following rights:</p>

          <h3>1. Right to Access</h3>
          <p>
            You have the right to request copies of your personal data. We provide you with direct
            access to all your data through your account dashboard.
          </p>

          <h3>2. Right to Rectification</h3>
          <p>
            You have the right to request correction of inaccurate or incomplete personal data. You
            can update your account information at any time.
          </p>

          <h3>3. Right to Erasure ("Right to be Forgotten")</h3>
          <p>
            You can request deletion of your personal data. When you delete your account, all your
            data is permanently removed from our systems.
          </p>

          <h3>4. Right to Restrict Processing</h3>
          <p>You can request that we limit how we use your personal data.</p>

          <h3>5. Right to Data Portability</h3>
          <p>
            You can request your data in a structured, commonly used format to transfer to another
            service. We provide export functionality for all your files.
          </p>

          <h3>6. Right to Object</h3>
          <p>You have the right to object to our processing of your personal data.</p>

          <h3>7. Rights Related to Automated Decision-Making</h3>
          <p>
            We do not use automated decision-making or profiling that produces legal effects
            concerning you.
          </p>

          <h2>Data Processing</h2>
          <p>We process your data based on the following legal grounds:</p>
          <ul>
            <li>
              <strong>Contract performance:</strong> To provide our cloud storage service
            </li>
            <li>
              <strong>Legitimate interests:</strong> To improve and secure our service
            </li>
            <li>
              <strong>Legal obligations:</strong> To comply with applicable laws
            </li>
          </ul>

          <h2>Data Security Measures</h2>
          <p>We implement comprehensive security measures including:</p>
          <ul>
            <li>End-to-end encryption for all stored files</li>
            <li>Transport Layer Security (TLS) for data in transit</li>
            <li>Two-factor authentication (2FA) support</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and logging</li>
            <li>Incident response procedures</li>
          </ul>

          <h2>Data Breach Notification</h2>
          <p>
            In the event of a data breach that poses a risk to your rights and freedoms, we will
            notify you and the relevant supervisory authority within 72 hours as required by GDPR.
          </p>

          <h2>Data Protection Officer</h2>
          <p>
            For questions about our data protection practices or to exercise your GDPR rights,
            contact our Data Protection Officer at: dpo@felicloud.com
          </p>

          <h2>Supervisory Authority</h2>
          <p>
            You have the right to lodge a complaint with your local data protection supervisory
            authority if you believe we have not complied with GDPR.
          </p>

          <h2>Third-Party Processors</h2>
          <p>
            We carefully select any third-party service providers and ensure they meet GDPR
            requirements. We maintain data processing agreements with all processors.
          </p>

          <h2>International Transfers</h2>
          <p>
            We do not transfer personal data outside the European Economic Area (EEA). All data
            remains within EU data centers.
          </p>

          <h2>Updates to This Page</h2>
          <p>
            We may update this GDPR compliance information to reflect changes in our practices or
            legal requirements. Check this page periodically for updates.
          </p>
        </div>
      </div>
    </div>
  );
}
