'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function ComparePage() {
  const { t } = useTranslation('pt');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('comparison.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('comparison.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-4 px-6 text-left font-bold text-gray-900 bg-white sticky left-0 z-10">
                    {t('comparison.tableHeaderFeature')}
                  </th>
                  <th className="py-4 px-6 text-center font-bold text-primary bg-primary/5">
                    {t('comparison.felicloud')}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">
                    {t('comparison.googleDrive')}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">
                    {t('comparison.dropbox')}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">
                    {t('comparison.pCloud')}
                  </th>
                  <th className="py-4 px-6 text-center font-semibold text-gray-700">
                    {t('comparison.mega')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Free Storage */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.freeStorage')}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-primary bg-primary/5">
                    10 GB
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    15 GB
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    2 GB
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    10 GB
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    20 GB
                  </td>
                </tr>

                {/* Lifetime Plans */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.lifetimePlans')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>

                {/* End-to-End Encryption */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.endToEndEncryption')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.optional')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.paidOnly')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.paidAddOn')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>

                {/* Server Location */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.serverLocation')}
                  </td>
                  <td className="py-4 px-6 text-center font-semibold text-primary bg-primary/5">
                    {t('comparison.serverEUOnly')}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {t('comparison.serverUSA')}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {t('comparison.serverUSA')}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {t('comparison.serverEUUSA')}
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    {t('comparison.serverNZ')}
                  </td>
                </tr>

                {/* GDPR Compliant */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.gdprCompliant')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.partial')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.partial')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                </tr>

                {/* Open Source */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.openSource')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>

                {/* File Versioning */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.fileVersioning')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.limited')}</span>
                  </td>
                </tr>

                {/* Collaboration Tools */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.collaborationTools')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.limited')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.limited')}</span>
                  </td>
                </tr>

                {/* Office Suite */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.onlineOfficeSuite')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-xs text-gray-500">{t('comparison.partner')}</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>

                {/* Calendar & Contacts */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.calendarContacts')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>

                {/* Video Calls */}
                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.videoCalls')}
                  </td>
                  <td className="py-4 px-6 text-center bg-primary/5">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <svg className="h-6 w-6 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </td>
                </tr>

                {/* Price for 1TB/Year */}
                <tr className="border-b-2 border-gray-200 hover:bg-gray-50">
                  <td className="py-4 px-6 font-medium text-gray-900 bg-white sticky left-0">
                    {t('comparison.lifetimePrice1TB')}
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-primary bg-primary/5">
                    €299<br/>
                    <span className="text-xs font-normal">{t('comparison.oneTime')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    ~€2,000<br/>
                    <span className="text-xs">{t('comparison.over10Years')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    ~€1,200<br/>
                    <span className="text-xs">{t('comparison.over10Years')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    €499<br/>
                    <span className="text-xs">{t('comparison.oneTime')}</span>
                  </td>
                  <td className="py-4 px-6 text-center text-gray-600">
                    ~€1,000<br/>
                    <span className="text-xs">{t('comparison.over10Years')}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              {t('comparison.priceDisclaimer')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Felicloud */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('comparison.whyChooseTitle')}
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              {t('comparison.whyChooseSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.europeanValuesTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.europeanValuesDescription')}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.lifetimePricingTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.lifetimePricingDescription')}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.openSourceTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.openSourceDescription')}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.trueEncryptionTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.trueEncryptionDescription')}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.completePlatformTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.completePlatformDescription')}
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {t('comparison.noVendorLockInTitle')}
              </h3>
              <p className="text-gray-600">
                {t('comparison.noVendorLockInDescription')}
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
              {t('comparison.ctaTitle')}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              {t('comparison.ctaSubtitle')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="/pt/signup/">
                <button className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-xl hover:bg-gray-100 transition-colors">
                  {t('comparison.startFree')}
                </button>
              </a>
              <a href="/pt/pricing/">
                <button className="rounded-lg bg-primary-dark px-8 py-4 text-lg font-semibold text-white shadow-xl hover:bg-primary transition-colors border-2 border-white">
                  {t('comparison.viewPricing')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
