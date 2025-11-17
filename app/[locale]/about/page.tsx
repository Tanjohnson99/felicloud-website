export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Felicloud</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            European cloud storage built on privacy, transparency, and user freedom.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div className="lg:pr-8">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Mission</h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Traditional cloud providers lock users into subscription models while collecting and
                monetizing personal data. We believe there's a better way.
              </p>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Felicloud was created to provide secure, private cloud storage that respects your
                rights and puts you in control of your data. We're committed to transparency,
                European data protection standards, and giving you the freedom to own your digital
                life.
              </p>
            </div>

            <div className="lg:pl-8 lg:border-l lg:border-gray-900/10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Values</h2>
              <dl className="mt-6 space-y-8">
                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Privacy First
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Your data belongs to you. We don't track, analyze, or monetize your personal
                    information. End-to-end encryption ensures only you can access your files.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Transparency
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Built on open-source Nextcloud software. Our code is transparent and auditable.
                    No hidden tracking, no backdoors, no secrets.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    European Values
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    All data hosted exclusively in the European Union. Full GDPR compliance and
                    subject to strict European privacy laws that put your rights first.
                  </dd>
                </div>

                <div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    Fair Pricing
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    Lifetime plans available - pay once, use forever. No recurring fees, no price
                    increases, no subscription traps. Get 10 GB free, forever.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Why Felicloud?</h2>
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col border-l-4 border-primary pl-4">
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="mt-2 text-sm text-gray-600">EU Hosted Servers</p>
            </div>
            <div className="flex flex-col border-l-4 border-primary pl-4">
              <p className="text-3xl font-bold text-primary">0</p>
              <p className="mt-2 text-sm text-gray-600">Tracking or Ads</p>
            </div>
            <div className="flex flex-col border-l-4 border-primary pl-4">
              <p className="text-3xl font-bold text-primary">10,000+</p>
              <p className="mt-2 text-sm text-gray-600">Happy Users</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
