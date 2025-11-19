'use client';

import { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 sm:py-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Payment Successful! 🎉
            </h1>

            <p className="text-lg text-gray-600 mb-8">
              Thank you for your purchase. Your account is being set up.
            </p>
          </div>

          {/* What's Next Section */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              What happens next?
            </h2>

            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  1
                </span>
                <div>
                  <strong>Payment Confirmation:</strong> Your payment has been received and is being processed by Stripe.
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  2
                </span>
                <div>
                  <strong>Account Setup:</strong> Your Felicloud account is being created/upgraded automatically. This usually takes less than 2 minutes.
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  3
                </span>
                <div>
                  <strong>Welcome Email:</strong> You'll receive an email with your login credentials and instructions to access your cloud storage.
                </div>
              </li>

              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                  4
                </span>
                <div>
                  <strong>Start Using Felicloud:</strong> Log in and start uploading your files, photos, and documents!
                </div>
              </li>
            </ul>
          </div>

          {/* Receipt Info */}
          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <p className="text-sm text-gray-600">
                <strong>Transaction ID:</strong>{' '}
                <code className="bg-gray-200 px-2 py-1 rounded text-xs">{sessionId}</code>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                A receipt has been sent to your email address.
              </p>
            </div>
          )}

          {/* Support Notice */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
              </svg>
              <div>
                <p className="text-sm text-yellow-900">
                  <strong>Haven't received your email?</strong>
                </p>
                <p className="text-sm text-yellow-800 mt-1">
                  Check your spam folder or contact support if you don't receive your credentials within 10 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="https://cloud.felicloud.com" className="flex-1">
              <button className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors cursor-pointer">
                Access Your Cloud
                <svg className="inline-block ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </Link>

            <Link href="/en" className="flex-1">
              <button className="w-full rounded-lg border-2 border-gray-300 bg-white px-6 py-4 text-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer">
                Return to Home
              </button>
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact our{' '}
              <Link href="/en/support" className="text-primary hover:underline font-semibold cursor-pointer">
                support team
              </Link>
            </p>
          </div>
        </div>

        {/* Security Badges */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-gray-500">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span>Secure Payment</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span>EU Hosted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span>GDPR Compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
