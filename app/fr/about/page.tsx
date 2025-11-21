'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function AboutPage() {
  const { t } = useTranslation('fr');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('about.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('about.storyTitle')}
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                {t('about.storyParagraph1')}
              </p>
              <p>
                {t('about.storyParagraph2')}
              </p>
              <p>
                {t('about.storyParagraph3')}
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
              {t('about.organizationTitle')}
            </h2>
            <div className="rounded-2xl bg-white p-8 shadow-xl border-2 border-primary/20">
              <p className="text-xl text-gray-900 font-semibold mb-4">
                {t('about.organizationTagline')} <span className="text-primary">FELIDATA</span> {t('about.organizationProject')}
              </p>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.organizationMember')} <span className="font-bold text-gray-900">BTJT Group</span>
              </p>
              <div className="border-t border-gray-200 pt-6 mt-6">
                <p className="text-gray-600">
                  {t('about.organizationDescription')}
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
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">{t('about.privacyFirstTitle')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('about.privacyFirstDescription')}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">{t('about.europeanTitle')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('about.europeanDescription')}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">{t('about.openSourceTitle')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('about.openSourceDescription')}
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900">{t('about.fairPricingTitle')}</h3>
                <p className="mt-4 text-gray-600">
                  {t('about.fairPricingDescription')}
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
              {t('about.technologyTitle')}
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-600">
              <p>
                {t('about.technologyParagraph1')}
              </p>
              <p>
                {t('about.technologyParagraph2')}
              </p>
              <p>
                {t('about.technologyParagraph3')}
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
              {t('about.ctaTitle')}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {t('about.ctaSubtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/fr/signup/">
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-gray-100 transition-colors">
                  {t('about.ctaButton')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
