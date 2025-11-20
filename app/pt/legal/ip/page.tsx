'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function IntellectualPropertyPage() {
  const { t } = useTranslation('pt');
  const formattedDate = new Date().toLocaleDateString('pt-PT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('legal.ip.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('legal.ip.lastUpdated').replace('{{date}}', formattedDate)}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>{t('legal.ip.section1.title')}</h2>
            <p>
              {t('legal.ip.section1.content')}
            </p>

            <h2>{t('legal.ip.section2.title')}</h2>
            <p>
              {t('legal.ip.section2.intro')}
            </p>
            <ul>
              <li>{t('legal.ip.section2.items.0')}</li>
              <li>{t('legal.ip.section2.items.1')}</li>
              <li>{t('legal.ip.section2.items.2')}</li>
              <li>{t('legal.ip.section2.items.3')}</li>
              <li>{t('legal.ip.section2.items.4')}</li>
              <li>{t('legal.ip.section2.items.5')}</li>
            </ul>

            <h2>{t('legal.ip.section3.title')}</h2>
            <p>
              {t('legal.ip.section3.intro')}
            </p>
            <ul>
              <li>{t('legal.ip.section3.items.0')}</li>
              <li>{t('legal.ip.section3.items.1')}</li>
              <li>{t('legal.ip.section3.items.2')}</li>
              <li>{t('legal.ip.section3.items.3')}</li>
              <li>{t('legal.ip.section3.items.4')}</li>
            </ul>

            <h2>{t('legal.ip.section4.title')}</h2>
            <p>
              {t('legal.ip.section4.content')}
            </p>

            <h2>{t('legal.ip.section5.title')}</h2>
            <p>
              {t('legal.ip.section5.content')}
            </p>

            <h2>{t('legal.ip.section6.title')}</h2>
            <p>
              {t('legal.ip.section6.intro')}
            </p>
            <div className="not-prose rounded-lg bg-gray-50 p-6 my-6">
              <p className="text-gray-900 font-semibold">{t('legal.ip.section6.department')}</p>
              <p className="text-gray-600 mt-2">{t('legal.ip.section6.email')}</p>
              <p className="text-gray-600">{t('legal.ip.section6.subject')}</p>
            </div>

            <h2>{t('legal.ip.section7.title')}</h2>
            <p>
              {t('legal.ip.section7.content')}
            </p>

            <h2>{t('legal.ip.section8.title')}</h2>
            <p>
              {t('legal.ip.section8.content')}
            </p>

            <h2>{t('legal.ip.section9.title')}</h2>
            <p>
              {t('legal.ip.section9.content')}
            </p>
          </div>

          <div className="mt-16 rounded-2xl bg-primary/5 border border-primary/20 p-8">
            <h3 className="text-xl font-bold text-gray-900">{t('legal.ip.cta.title')}</h3>
            <p className="mt-4 text-gray-600">
              {t('legal.ip.cta.intro')}{' '}
              <a href="mailto:legal@felicloud.com" className="text-primary hover:underline font-semibold">
                {t('legal.ip.cta.email')}
              </a>
            </p>
            <div className="mt-6">
              <a
                href="/pt/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-semibold hover:bg-primary-dark transition-colors"
              >
                {t('legal.ip.cta.button')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
