'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function PrivacyPage() {
  const { t } = useTranslation('en');

  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('legal.privacy.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('legal.privacy.lastUpdated')}
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.commitment.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.commitment.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section1.title')}</h2>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{t('legal.privacy.section1.account.title')}</h3>
              <p className="mt-2">
                {t('legal.privacy.section1.account.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section1.account.items.0')}</li>
                <li>{t('legal.privacy.section1.account.items.1')}</li>
                <li>{t('legal.privacy.section1.account.items.2')}</li>
                <li>{t('legal.privacy.section1.account.items.3')}</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">{t('legal.privacy.section1.usage.title')}</h3>
              <p className="mt-2">
                {t('legal.privacy.section1.usage.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section1.usage.items.0')}</li>
                <li>{t('legal.privacy.section1.usage.items.1')}</li>
                <li>{t('legal.privacy.section1.usage.items.2')}</li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold text-gray-900">{t('legal.privacy.section1.files.title')}</h3>
              <p className="mt-2">
                {t('legal.privacy.section1.files.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section2.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section2.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section2.items.0')}</li>
                <li>{t('legal.privacy.section2.items.1')}</li>
                <li>{t('legal.privacy.section2.items.2')}</li>
                <li>{t('legal.privacy.section2.items.3')}</li>
                <li>{t('legal.privacy.section2.items.4')}</li>
              </ul>
              <p className="mt-4 font-semibold">
                {t('legal.privacy.section2.commitment')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section3.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section3.location')}
              </p>
              <p className="mt-4">
                {t('legal.privacy.section3.measures')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section3.items.0')}</li>
                <li>{t('legal.privacy.section3.items.1')}</li>
                <li>{t('legal.privacy.section3.items.2')}</li>
                <li>{t('legal.privacy.section3.items.3')}</li>
                <li>{t('legal.privacy.section3.items.4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section4.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section4.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li><strong>{t('legal.privacy.section4.rights.access.title')}</strong> {t('legal.privacy.section4.rights.access.content')}</li>
                <li><strong>{t('legal.privacy.section4.rights.rectification.title')}</strong> {t('legal.privacy.section4.rights.rectification.content')}</li>
                <li><strong>{t('legal.privacy.section4.rights.erasure.title')}</strong> {t('legal.privacy.section4.rights.erasure.content')}</li>
                <li><strong>{t('legal.privacy.section4.rights.portability.title')}</strong> {t('legal.privacy.section4.rights.portability.content')}</li>
                <li><strong>{t('legal.privacy.section4.rights.object.title')}</strong> {t('legal.privacy.section4.rights.object.content')}</li>
                <li><strong>{t('legal.privacy.section4.rights.restrict.title')}</strong> {t('legal.privacy.section4.rights.restrict.content')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.privacy.section4.contact')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section5.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section5.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section5.items.0')}</li>
                <li>{t('legal.privacy.section5.items.1')}</li>
                <li>{t('legal.privacy.section5.items.2')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section6.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section6.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section6.items.0')}</li>
                <li>{t('legal.privacy.section6.items.1')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.privacy.section6.noTracking')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section7.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section7.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.privacy.section7.items.0')}</li>
                <li>{t('legal.privacy.section7.items.1')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.privacy.section7.compliance')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section8.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section8.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section9.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section9.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.privacy.section10.title')}</h2>
              <p className="mt-4">
                {t('legal.privacy.section10.intro')}
              </p>
              <p className="mt-2">
                {t('legal.privacy.section10.email')}
              </p>
              <p className="mt-2">
                {t('legal.privacy.section10.dpo')}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
