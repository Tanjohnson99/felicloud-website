'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function GDPRPage() {
  const { t } = useTranslation('fr');

  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {t('legal.gdpr.title')}
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            {t('legal.gdpr.subtitle')}
          </p>

          <div className="mt-12 space-y-8 text-gray-600">
            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.intro.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.intro.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section1.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section1.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li><strong>{t('legal.gdpr.section1.items.contract.title')}</strong> {t('legal.gdpr.section1.items.contract.content')}</li>
                <li><strong>{t('legal.gdpr.section1.items.legitimate.title')}</strong> {t('legal.gdpr.section1.items.legitimate.content')}</li>
                <li><strong>{t('legal.gdpr.section1.items.legal.title')}</strong> {t('legal.gdpr.section1.items.legal.content')}</li>
                <li><strong>{t('legal.gdpr.section1.items.consent.title')}</strong> {t('legal.gdpr.section1.items.consent.content')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section2.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section2.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section2.items.0')}</li>
                <li>{t('legal.gdpr.section2.items.1')}</li>
                <li>{t('legal.gdpr.section2.items.2')}</li>
                <li>{t('legal.gdpr.section2.items.3')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.gdpr.section2.commitment')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section3.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section3.intro')}
              </p>

              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.access.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.access.content')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.rectification.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.rectification.content')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.erasure.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.erasure.content')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.portability.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.portability.content')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.object.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.object.content')}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t('legal.gdpr.section3.rights.restrict.title')}</h3>
                  <p className="mt-2">
                    {t('legal.gdpr.section3.rights.restrict.content')}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-semibold">
                {t('legal.gdpr.section3.contact')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section4.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section4.intro')}
              </p>
              <p className="mt-4">
                {t('legal.gdpr.section4.locations')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section4.items.0')}</li>
                <li>{t('legal.gdpr.section4.items.1')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.gdpr.section4.cloudAct')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section5.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section5.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section5.items.0')}</li>
                <li>{t('legal.gdpr.section5.items.1')}</li>
                <li>{t('legal.gdpr.section5.items.2')}</li>
                <li>{t('legal.gdpr.section5.items.3')}</li>
                <li>{t('legal.gdpr.section5.items.4')}</li>
                <li>{t('legal.gdpr.section5.items.5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section6.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section6.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section6.items.0')}</li>
                <li>{t('legal.gdpr.section6.items.1')}</li>
                <li>{t('legal.gdpr.section6.items.2')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.gdpr.section6.encryption')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section7.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section7.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section7.items.0')}</li>
                <li>{t('legal.gdpr.section7.items.1')}</li>
              </ul>
              <p className="mt-4">
                {t('legal.gdpr.section7.agreements')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section8.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section8.intro')}
              </p>
              <p className="mt-4">
                {t('legal.gdpr.section8.link')}{' '}
                <a
                  href="https://edpb.europa.eu/about-edpb/about-edpb/members_en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  {t('legal.gdpr.section8.linkText')}
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section9.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section9.intro')}
              </p>
              <p className="mt-2">
                {t('legal.gdpr.section9.email')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.section10.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.section10.intro')}
              </p>
              <ul className="mt-4 list-disc list-inside space-y-2">
                <li>{t('legal.gdpr.section10.items.0')}</li>
                <li>{t('legal.gdpr.section10.items.1')}</li>
                <li>{t('legal.gdpr.section10.items.2')}</li>
                <li>{t('legal.gdpr.section10.items.3')}</li>
              </ul>
            </section>

            <section className="mt-12 rounded-2xl bg-primary/10 p-8">
              <h2 className="text-2xl font-bold text-gray-900">{t('legal.gdpr.questions.title')}</h2>
              <p className="mt-4">
                {t('legal.gdpr.questions.intro')}
              </p>
              <p className="mt-4 font-semibold">
                {t('legal.gdpr.questions.email')}
              </p>
              <p className="mt-2">
                {t('legal.gdpr.questions.response')}
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
