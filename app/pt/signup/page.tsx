'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
    // Clear submit error
    if (submitError) {
      setSubmitError('');
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Full name validation
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/signup/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send verification email');
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Signup request error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to send verification email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success state - show email sent message
  if (submitSuccess) {
    return (
      <div className="bg-white">
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                </svg>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Check Your Email
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We've sent a verification email to <strong>{formData.email}</strong>
              </p>

              <div className="mt-8 rounded-lg bg-blue-50 p-6">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">Next Steps:</h2>
                <ol className="text-left text-sm text-blue-800 space-y-2 list-decimal list-inside">
                  <li>Check your inbox (and spam folder!)</li>
                  <li>Click the verification link</li>
                  <li>Set your password and accept the terms</li>
                  <li>Access your free 10 GB cloud!</li>
                </ol>
              </div>

              <div className="mt-8 rounded-lg bg-yellow-50 p-4 border-l-4 border-yellow-400">
                <p className="text-sm text-yellow-800">
                  ⏱️ The verification link is valid for <strong>24 hours</strong>
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/"
                  className="text-sm font-semibold text-primary hover:text-primary/80"
                >
                  ← Back to homepage
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Form state - show signup form
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Create your free account
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Get 10 GB of secure cloud storage for free. No credit card required.
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-500 italic">
              Once your free account is created, you can upgrade to a larger plan anytime.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="rounded-lg bg-red-50 p-4 border-l-4 border-red-400">
                <p className="text-sm text-red-800">{submitError}</p>
              </div>
            )}

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-900 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                className={`block w-full rounded-lg border-2 ${errors.fullName ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                placeholder="John Doe"
              />
              {errors.fullName && <p className="mt-2 text-sm text-red-600">{errors.fullName}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`block w-full rounded-lg border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
              <p className="mt-2 text-sm text-gray-500">
                We'll send a verification link to this email
              </p>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? 'Sending...' : 'Continue'}
              </button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <a
                  href={process.env.NEXT_PUBLIC_NEXTCLOUD_URL || 'https://cloud.felicloud.com'}
                  className="font-semibold text-primary hover:text-primary/80"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>

          {/* Security Note */}
          <div className="mt-8 rounded-lg bg-gray-50 p-4">
            <p className="text-xs text-gray-600 text-center">
              By continuing, you agree to our{' '}
              <Link href="/pt/legal/terms" className="font-semibold text-primary hover:underline">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/pt/legal/privacy" className="font-semibold text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
