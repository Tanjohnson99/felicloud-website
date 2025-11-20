'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

function VerifyContent() {
  const { t } = useTranslation('pt');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptPrivacy: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [userData, setUserData] = useState<{
    email: string;
    fullName: string;
    nextcloudUrl?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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

    // Password validation (Nextcloud requirements)
    if (!formData.password) {
      newErrors.password = t('signup.errors.passwordRequired');
    } else if (formData.password.length < 10) {
      newErrors.password = t('signup.errors.passwordTooShort');
    } else if (!/[a-z]/.test(formData.password)) {
      newErrors.password = t('signup.errors.passwordNoLowercase');
    } else if (!/[A-Z]/.test(formData.password)) {
      newErrors.password = t('signup.errors.passwordNoUppercase');
    } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password)) {
      newErrors.password = t('signup.errors.passwordNoSpecial');
    }

    // Confirm password validation
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('signup.errors.passwordsDoNotMatch');
    }

    // Terms validation
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = t('signup.errors.mustAcceptTerms');
    }

    // Privacy validation
    if (!formData.acceptPrivacy) {
      newErrors.acceptPrivacy = t('signup.errors.mustAcceptPrivacy');
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

    if (!token) {
      setSubmitError(t('signup.errors.invalidVerificationLink'));
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/signup/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          password: formData.password,
          acceptTerms: formData.acceptTerms,
          acceptPrivacy: formData.acceptPrivacy,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('signup.errors.accountCreationFailed'));
      }

      setUserData({
        email: data.email,
        fullName: data.fullName,
        nextcloudUrl: data.nextcloudUrl,
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error('Signup verification error:', error);
      setSubmitError(error instanceof Error ? error.message : t('signup.errors.accountCreationFailedRetry'));
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if token exists
  if (!token) {
    return (
      <div className="bg-white">
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 mb-6">
                <svg className="h-8 w-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {t('signup.verification.invalidLinkTitle')}
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('signup.verification.invalidLinkMessage')}
              </p>

              <div className="mt-10">
                <Link
                  href="/pt/signup"
                  className="rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90"
                >
                  {t('signup.verification.requestNewLink')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Success state - show account created message
  if (submitSuccess && userData) {
    return (
      <div className="bg-white">
        <section className="py-20 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:px-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {t('signup.verification.accountCreatedEmoji')} {t('signup.verification.accountCreatedTitle')}
              </h1>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                {t('signup.verification.accountCreatedMessage').replace('{{name}}', userData.fullName)}
              </p>

              <div className="mt-8 rounded-lg bg-green-50 p-6">
                <h2 className="text-lg font-semibold text-green-900 mb-2">
                  {t('signup.verification.accountDetailsTitle')}
                </h2>
                <div className="text-left text-sm text-green-800 space-y-2">
                  <p><strong>{t('signup.verification.emailLabel')}</strong> {userData.email}</p>
                  <p><strong>{t('signup.verification.storageLabel')}</strong> {t('signup.verification.storageAmount')}</p>
                  <p><strong>{t('signup.verification.statusLabel')}</strong> {t('signup.verification.statusActive')}</p>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={userData.nextcloudUrl || 'https://cloud.felicloud.com'}
                  className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary/90"
                >
                  {t('signup.verification.accessCloud')}
                </a>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-600">
                  {t('signup.verification.welcomeEmailSent').replace('{{email}}', userData.email)}
                </p>
              </div>

              <div className="mt-10">
                <Link
                  href="/"
                  className="text-sm font-semibold text-primary hover:text-primary/80"
                >
                  {t('signup.verification.returnHome')}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Form state - show password and terms form
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('signup.verification.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('signup.verification.subtitle')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {submitError && (
              <div className="rounded-lg bg-red-50 p-4 border-l-4 border-red-400">
                <p className="text-sm text-red-800">{submitError}</p>
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                {t('signup.verification.passwordLabel')} <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className={`block w-full rounded-lg border-2 ${errors.password ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                placeholder={t('signup.verification.passwordPlaceholder')}
              />
              {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
              <p className="mt-2 text-sm text-gray-500">
                {t('signup.verification.requirements')}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-900 mb-2">
                {t('signup.verification.confirmPasswordLabel')} <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                required
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`block w-full rounded-lg border-2 ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-0 transition-colors`}
                placeholder={t('signup.verification.confirmPasswordPlaceholder')}
              />
              {errors.confirmPassword && <p className="mt-2 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>

            {/* Terms Checkbox */}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="acceptTerms"
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="acceptTerms" className="text-gray-900">
                    {t('signup.terms.agreeToTerms').replace('I agree to the', 'I accept the')}{' '}
                    <Link
                      href="/pt/legal/terms"
                      target="_blank"
                      className="font-semibold text-primary hover:underline"
                    >
                      {t('footer.termsOfService')}
                    </Link>
                    <span className="text-red-500"> *</span>
                  </label>
                  {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms}</p>}
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-6 items-center">
                  <input
                    id="acceptPrivacy"
                    name="acceptPrivacy"
                    type="checkbox"
                    checked={formData.acceptPrivacy}
                    onChange={handleChange}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                </div>
                <div className="ml-3 text-sm leading-6">
                  <label htmlFor="acceptPrivacy" className="text-gray-900">
                    {t('signup.terms.agreeToPrivacy').replace('I agree to the', 'I accept the')}{' '}
                    <Link
                      href="/pt/legal/privacy"
                      target="_blank"
                      className="font-semibold text-primary hover:underline"
                    >
                      {t('footer.privacyPolicy')}
                    </Link>
                    <span className="text-red-500"> *</span>
                  </label>
                  {errors.acceptPrivacy && <p className="mt-1 text-sm text-red-600">{errors.acceptPrivacy}</p>}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-primary px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? t('signup.verification.creatingAccount') : t('signup.verification.createAccountButton')}
              </button>
            </div>
          </form>

          {/* GDPR Note */}
          <div className="mt-8 rounded-lg bg-gray-50 p-4">
            <p className="text-xs text-gray-600 text-center">
              {t('signup.verification.gdprNote')}{' '}
              <Link href="/pt/legal/gdpr" className="font-semibold text-primary hover:underline">
                {t('signup.verification.gdprPolicyLink')}
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function VerifyPage() {
  const { t } = useTranslation('pt');

  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">{t('common.loading')}</div>}>
      <VerifyContent />
    </Suspense>
  );
}
