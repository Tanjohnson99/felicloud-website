'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function HelpCenterPage() {
  const { t } = useTranslation('fr');

  const categories = [
    {
      title: t('help.gettingStartedTitle'),
      icon: '🚀',
      topics: [
        t('help.gettingStartedTopic1'),
        t('help.gettingStartedTopic2'),
        t('help.gettingStartedTopic3'),
        t('help.gettingStartedTopic4'),
      ],
    },
    {
      title: t('help.accountBillingTitle'),
      icon: '💳',
      topics: [
        t('help.accountBillingTopic1'),
        t('help.accountBillingTopic2'),
        t('help.accountBillingTopic3'),
        t('help.accountBillingTopic4'),
      ],
    },
    {
      title: t('help.securityPrivacyTitle'),
      icon: '🔒',
      topics: [
        t('help.securityPrivacyTopic1'),
        t('help.securityPrivacyTopic2'),
        t('help.securityPrivacyTopic3'),
        t('help.securityPrivacyTopic4'),
      ],
    },
    {
      title: t('help.fileManagementTitle'),
      icon: '📁',
      topics: [
        t('help.fileManagementTopic1'),
        t('help.fileManagementTopic2'),
        t('help.fileManagementTopic3'),
        t('help.fileManagementTopic4'),
      ],
    },
    {
      title: t('help.appsSyncTitle'),
      icon: '📱',
      topics: [
        t('help.appsSyncTopic1'),
        t('help.appsSyncTopic2'),
        t('help.appsSyncTopic3'),
        t('help.appsSyncTopic4'),
      ],
    },
    {
      title: t('help.advancedFeaturesTitle'),
      icon: '⚙️',
      topics: [
        t('help.advancedFeaturesTopic1'),
        t('help.advancedFeaturesTopic2'),
        t('help.advancedFeaturesTopic3'),
        t('help.advancedFeaturesTopic4'),
      ],
    },
  ];

  const popularArticles = [
    t('help.popularArticle1'),
    t('help.popularArticle2'),
    t('help.popularArticle3'),
    t('help.popularArticle4'),
    t('help.popularArticle5'),
    t('help.popularArticle6'),
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('help.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('help.heroSubtitle')}
            </p>
          </div>

          {/* Search bar */}
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="relative">
              <input
                type="text"
                placeholder={t('help.searchPlaceholder')}
                className="w-full rounded-lg border border-gray-300 px-6 py-4 text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="absolute right-2 top-2 rounded-lg bg-primary px-6 py-2 text-white hover:bg-primary-dark transition-colors">
                {t('help.searchButton')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                <ul className="mt-6 space-y-3">
                  {category.topics.map((topic) => (
                    <li key={topic}>
                      <a
                        href="#"
                        className="flex items-center text-gray-600 hover:text-primary transition-colors"
                      >
                        <svg
                          className="h-4 w-4 mr-2 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                        {topic}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {t('help.popularArticlesTitle')}
            </h2>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="block rounded-lg border border-gray-200 bg-white p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-900 font-medium">{article}</span>
                    <svg
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-6 py-16 sm:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {t('help.contactSupportTitle')}
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                {t('help.contactSupportSubtitle')}
              </p>
              <div className="mt-10">
                <a
                  href="/fr/support"
                  className="rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors shadow-lg inline-block"
                >
                  {t('help.contactSupportButton')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
