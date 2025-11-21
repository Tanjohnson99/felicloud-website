'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function SupportPage() {
  const { t } = useTranslation('pt');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('support.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('support.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('support.faqTitle')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('support.faqSubtitle')}
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-8">
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q1')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a1')}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q2')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a2')}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q3')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a3')}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q4')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a4')}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q5')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a5')}
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <h3 className="text-lg font-semibold text-gray-900">{t('support.faq.q6')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('support.faq.a6')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('support.contactTitle')}
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('support.contactSubtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/pt/contact"
                className="rounded-lg bg-primary px-8 py-3 text-white font-semibold hover:bg-primary-dark transition-colors shadow-lg"
              >
                {t('support.contactButton')}
              </a>
              <a
                href="/pt/help"
                className="rounded-lg border-2 border-primary px-8 py-3 text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
              >
                {t('support.helpCenterButton')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
