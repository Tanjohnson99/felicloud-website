'use client';

import { useTranslations } from 'next-intl';

const Check = () => (
  <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const Cross = () => (
  <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export function Comparison() {
  const t = useTranslations('comparison');

  const features = [
    { key: 'privacy', felicloud: true, gdrive: false, dropbox: false },
    { key: 'eu_hosting', felicloud: true, gdrive: false, dropbox: false },
    { key: 'lifetime', felicloud: true, gdrive: false, dropbox: false },
    { key: 'opensource', felicloud: true, gdrive: false, dropbox: false },
    { key: 'no_tracking', felicloud: true, gdrive: false, dropbox: false },
  ];

  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('title')}
          </h2>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900"></th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-primary">{t('felicloud')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('gdrive')}</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">{t('dropbox')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {features.map((feature) => (
                  <tr key={feature.key} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {t(feature.key)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.felicloud ? <Check /> : <Cross />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.gdrive ? <Check /> : <Cross />}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {feature.dropbox ? <Check /> : <Cross />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
