export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About Felicloud
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              European cloud storage built on privacy, security, and transparency
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Felicloud was founded with a simple mission: provide secure, private cloud storage that respects your rights and freedoms.
              </p>
              <p>
                We believe that your data belongs to you, and only you. That's why we built Felicloud on the principles of privacy-by-design, transparency, and European values.
              </p>
              <p>
                Unlike big tech companies that profit from your data, we have a simple business model: you pay for storage, and we provide the best service possible. No ads, no tracking, no hidden agendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization */}
      <section className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
              Part of a Trusted Group
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-xl border-2 border-primary/20">
              <p className="text-xl text-gray-900 font-semibold mb-4">
                Felicloud is a <span className="text-primary">FELIDATA</span> project
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Member of the <span className="font-bold text-gray-900">BTJT Group</span>
              </p>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-600">
                  FELIDATA is dedicated to providing privacy-focused, European data solutions. As part of BTJT Group,
                  we benefit from years of expertise in data management, security, and European compliance, ensuring
                  that Felicloud meets the highest standards of quality and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Values
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Privacy First</h3>
                <p className="mt-4 text-gray-600">
                  Your data is encrypted end-to-end. We can't see your files, and we never will. GDPR compliant by design.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">100% European</h3>
                <p className="mt-4 text-gray-600">
                  All our servers are located in Europe, subject to strict European data protection laws. No US cloud act, no foreign surveillance.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Open Source</h3>
                <p className="mt-4 text-gray-600">
                  Built on Nextcloud, an open-source platform. Transparent, auditable, and community-driven. No black boxes.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">Fair Pricing</h3>
                <p className="mt-4 text-gray-600">
                  Lifetime plans with no recurring fees. You own your storage forever. No price hikes, no subscription traps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Technology
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                Felicloud is powered by Nextcloud, the world's most popular self-hosted cloud platform. With over 400,000 deployments worldwide, Nextcloud is trusted by governments, universities, and enterprises.
              </p>
              <p>
                Our infrastructure is hosted in European data centers with ISO 27001 certification, redundant power and cooling, and 24/7 monitoring.
              </p>
              <p>
                We use industry-standard encryption (AES-256) and secure protocols (TLS 1.3) to protect your data in transit and at rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the Movement
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Take back control of your data. Start with 10 GB free.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/en/signup/">
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
