export default function FeaturesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              All the Features You Need
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful cloud storage with privacy and security at its core
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Security Features */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">End-to-End Encryption</h3>
              <p className="mt-4 text-gray-600">
                Your files are encrypted on your device before upload. Only you have the keys to decrypt them. Not even we can access your data.
              </p>
            </div>

            {/* File Sharing */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Secure File Sharing</h3>
              <p className="mt-4 text-gray-600">
                Share files and folders with password protection and expiration dates. Control who can view, edit, or download your files.
              </p>
            </div>

            {/* Cross-Platform Sync */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Cross-Platform Sync</h3>
              <p className="mt-4 text-gray-600">
                Access your files from Windows, Mac, Linux, iOS, and Android. Changes sync automatically across all your devices.
              </p>
            </div>

            {/* File Versioning */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">File Versioning</h3>
              <p className="mt-4 text-gray-600">
                Never lose your work. We keep previous versions of your files so you can restore them at any time.
              </p>
            </div>

            {/* Collaboration */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Team Collaboration</h3>
              <p className="mt-4 text-gray-600">
                Work together with real-time document editing, comments, and shared folders. Perfect for teams and families.
              </p>
            </div>

            {/* Mobile Apps */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-gray-900">Mobile Apps</h3>
              <p className="mt-4 text-gray-600">
                Native apps for iOS and Android. Upload photos automatically, access files offline, and manage your storage on the go.
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
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Start with 10 GB free, no credit card required
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/en/signup/">
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-gray-100 transition-colors">
                  Sign Up Free
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
