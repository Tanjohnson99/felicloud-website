import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center">
            {/* Success icon */}
            <div className="flex justify-center mb-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                <svg className="h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            {/* Success message */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Payment Successful!
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>

            {/* Next steps */}
            <div className="rounded-lg bg-blue-50 border-2 border-blue-200 p-6 text-left mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">What's Next?</h2>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">1</span>
                  <span>Check your email for your account credentials and welcome message</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">2</span>
                  <span>Sign in to your Felicloud account at <a href="https://cloud.felicloud.com" className="font-semibold text-primary hover:underline">cloud.felicloud.com</a></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white text-sm font-semibold">3</span>
                  <span>Download our apps for desktop and mobile to sync your files</span>
                </li>
              </ol>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cloud.felicloud.com"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white hover:bg-primary/90 transition-colors shadow-lg"
              >
                Access Your Cloud
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
              <Link
                href="/en/download"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Download Apps
              </Link>
            </div>

            {/* Help section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Need help getting started?{' '}
                <Link href="/en/help" className="font-semibold text-primary hover:underline">
                  View our setup guide
                </Link>
                {' '}or{' '}
                <Link href="/en/contact" className="font-semibold text-primary hover:underline">
                  contact support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
