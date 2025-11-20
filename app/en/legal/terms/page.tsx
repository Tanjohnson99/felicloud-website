'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function TermsPage() {
  const { t } = useTranslation('en');

  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('legal.terms.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('legal.terms.lastUpdated')}
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section1.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section2.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section2.content')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.terms.section2.items.0')}</li>
                <li>{t('legal.terms.section2.items.1')}</li>
                <li>{t('legal.terms.section2.items.2')}</li>
                <li>{t('legal.terms.section2.items.3')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section3.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section3.content')}
              </p>
              <p className="mt-4">
                {t('legal.terms.section3.notify')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section4.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section4.content')}
              </p>
              <p className="mt-4">
                {t('legal.terms.section4.modifications')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section5.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section5.content')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.terms.section5.items.0')}</li>
                <li>{t('legal.terms.section5.items.1')}</li>
                <li>{t('legal.terms.section5.items.2')}</li>
                <li>{t('legal.terms.section5.items.3')}</li>
                <li>{t('legal.terms.section5.items.4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section6.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section6.content')}{' '}
                <a href="/en/legal/privacy/" className="text-primary hover:underline">
                  {t('legal.terms.section6.privacyLink')}
                </a>{' '}
                {t('legal.terms.section6.contentEnd')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section7.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section7.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section8.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section8.content')}
              </p>
              <p className="mt-4">
                {t('legal.terms.section8.refunds')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section9.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section9.content')}
              </p>
              <p className="mt-4">
                {t('legal.terms.section9.backups')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section10.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section10.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section11.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section11.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.terms.section12.title')}</h2>
              <p className="mt-4">
                {t('legal.terms.section12.content')}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
