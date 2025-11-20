'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function SLAPage() {
  const { t } = useTranslation('pt');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('sla.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('sla.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* SLA Guarantees */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-bold text-green-600">99.9%</div>
                <div>
                  <div className="text-xl font-bold text-gray-900">{t('sla.uptimeGuarantee')}</div>
                  <div className="text-gray-600 mt-1">{t('sla.uptimeGuaranteeDescription')}</div>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>{t('sla.commitmentTitle')}</h2>
              <p>
                {t('sla.commitmentDescription')}
              </p>

              <h3>{t('sla.uptimeMeaningTitle')}</h3>
              <ul>
                <li><strong>{t('sla.monthly')}</strong> {t('sla.monthlyDowntime')}</li>
                <li><strong>{t('sla.quarterly')}</strong> {t('sla.quarterlyDowntime')}</li>
                <li><strong>{t('sla.yearly')}</strong> {t('sla.yearlyDowntime')}</li>
              </ul>

              <h3>{t('sla.exclusionsTitle')}</h3>
              <p>{t('sla.exclusionsDescription')}</p>
              <ul>
                <li>{t('sla.exclusionMaintenance')}</li>
                <li>{t('sla.exclusionISP')}</li>
                <li>{t('sla.exclusionForceMajeure')}</li>
                <li>{t('sla.exclusionDDoS')}</li>
              </ul>

              <h3>{t('sla.serviceCreditsTitle')}</h3>
              <p>
                {t('sla.serviceCreditsDescription')}
              </p>
              <ul>
                <li><strong>{t('sla.creditTier1Range')}</strong> {t('sla.creditTier1Amount')}</li>
                <li><strong>{t('sla.creditTier2Range')}</strong> {t('sla.creditTier2Amount')}</li>
                <li><strong>{t('sla.creditTier3Range')}</strong> {t('sla.creditTier3Amount')}</li>
              </ul>

              <p className="text-sm text-gray-600">
                {t('sla.serviceCreditsNote')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Uptime Status */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('sla.realTimeStatusTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('sla.realTimeStatusDescription')}
            </p>
          </div>

          {/* UptimeKuma Dashboard Embed */}
          <div className="mx-auto max-w-6xl">
            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg">
              <div className="aspect-[16/10] w-full bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <svg className="mx-auto h-16 w-16 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                  <p className="text-gray-900 font-semibold mb-2">{t('sla.dashboardTitle')}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    {t('sla.dashboardDescription')}
                  </p>
                  <div className="text-sm text-gray-500 bg-gray-50 rounded-lg p-4 inline-block">
                    <code className="text-primary">
                      {'<iframe src="https://status.felicloud.com" />'}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              {t('sla.statusPageLinkText')}{' '}
              <a href="https://status.felicloud.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">
                status.felicloud.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-16 sm:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('sla.questionsTitle')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                {t('sla.questionsDescription')}
              </p>
              <div className="mt-10">
                <a
                  href="/pt/support"
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors shadow-lg inline-block"
                >
                  {t('sla.contactSupportButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
