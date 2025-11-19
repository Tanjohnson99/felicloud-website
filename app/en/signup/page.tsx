'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Username validation
    if (!formData.username) {
      newErrors.username = 'Username is required';
    } else if (!/^[a-zA-Z0-9_-]{3,20}$/.test(formData.username)) {
      newErrors.username = 'Username must be 3-20 alphanumeric characters';
    }

    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 10) {
      newErrors.password = 'Password must be at least 10 characters';
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
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
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
          displayName: formData.username,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create account');
      }

      setSubmitSuccess(true);
    } catch (error) {
      console.error('Signup error:', error);
      setSubmitError(error instanceof Error ? error.message : 'Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="rounded-full bg-green-100 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Account Created Successfully!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Your free 10 GB Felicloud account has been created.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
            <p className="text-sm text-blue-900">
              <strong>Check your email!</strong><br />
              We've sent your login credentials to <strong>{formData.email}</strong>.
              You can now access your cloud storage.
            </p>
          </div>
          <a href={process.env.NEXT_PUBLIC_NEXTCLOUD_URL || 'https://cloud.felicloud.com'} target="_blank" rel="noopener noreferrer">
            <button className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-primary/90 transition-colors mb-4 w-full">
              Access Your Cloud
            </button>
          </a>
          <Link href="/en/">
            <button className="rounded-lg border-2 border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors w-full">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Create Your Free Account
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Get started with 10 GB of secure, encrypted cloud storage
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          {/* Benefits Banner */}
          <div className="mb-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 p-6 border border-primary/20">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              What you'll get:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">10 GB of lifetime cloud storage</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">End-to-end encryption for your files</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Access from any device, anywhere</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">100% European hosting and GDPR compliance</span>
              </li>
            </ul>
          </div>

          {/* Error Alert */}
          {submitError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex">
                <svg className="h-5 w-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
                <p className="text-sm text-red-800">{submitError}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <div className="rounded-2xl bg-white border-2 border-gray-200 p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username */}
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-900 mb-2">
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  className={`block w-full rounded-lg border-2 ${errors.username ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                  placeholder="johndoe"
                />
                {errors.username && <p className="mt-2 text-sm text-red-600">{errors.username}</p>}
                <p className="mt-2 text-sm text-gray-500">
                  This will be your login username (3-20 characters, letters, numbers, _ or -)
                </p>
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
                  placeholder="john.doe@example.com"
                />
                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                <p className="mt-2 text-sm text-gray-500">
                  We'll send your credentials to this email
                </p>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className={`block w-full rounded-lg border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                  placeholder="••••••••"
                />
                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                <p className="mt-2 text-sm text-gray-500">
                  Minimum 10 characters (required by Nextcloud)
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full rounded-lg border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                  placeholder="••••••••"
                />
                {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary mt-0.5"
                />
                <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                  I agree to the{' '}
                  <Link href="/en/legal/terms" className="text-primary hover:underline font-semibold">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link href="/en/legal/privacy" className="text-primary hover:underline font-semibold">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-bold text-white shadow-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] transform"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Creating Account...
                  </span>
                ) : (
                  'Create Free Account'
                )}
              </button>

              {/* Notice */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex">
                  <svg className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                  <p className="text-sm text-blue-900">
                    <strong>Instant activation!</strong> Your account will be created immediately and credentials sent to your email.
                  </p>
                </div>
              </div>
            </form>
          </div>

          {/* Already have an account */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <a href={process.env.NEXT_PUBLIC_NEXTCLOUD_URL || 'https://cloud.felicloud.com'} className="text-primary hover:underline font-semibold">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
