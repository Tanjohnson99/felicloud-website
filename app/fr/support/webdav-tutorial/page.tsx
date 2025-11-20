'use client';

import { useTranslation } from '@/lib/hooks/useTranslation';

export default function WebDAVTutorialPage() {
  const { t } = useTranslation('fr');

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {t('tutorial.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('tutorial.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* What is WebDAV */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('tutorial.whatIsWebDAVTitle')}</h2>
            <p className="text-gray-600">
              {t('tutorial.whatIsWebDAVDescription')}
            </p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('tutorial.connectionSettingsTitle')}</h2>

          <div className="rounded-xl bg-gray-50 border border-gray-200 p-6 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('tutorial.credentialsTitle')}</h3>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-700 w-32">{t('tutorial.serverURL')}</span>
                <code className="flex-1 bg-white px-4 py-2 rounded border border-gray-300 text-primary">
                  https://dav.felicloud.com/remote.php/dav/files/USERNAME/
                </code>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-700 w-32">{t('tutorial.username')}</span>
                <code className="flex-1 bg-white px-4 py-2 rounded border border-gray-300">
                  your@email.com
                </code>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="font-semibold text-gray-700 w-32">{t('tutorial.password')}</span>
                <code className="flex-1 bg-white px-4 py-2 rounded border border-gray-300">
                  your_password
                </code>
              </div>
            </div>
            <p className="mt-4 text-sm text-amber-600">
              <strong>{t('tutorial.noteLabel')}</strong> {t('tutorial.noteText')}
            </p>
          </div>
        </div>
      </section>

      {/* Platform-specific instructions */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">{t('tutorial.platformSetupTitle')}</h2>

          <div className="space-y-6">
            {/* Windows */}
            <div className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('tutorial.platforms.windows.title')}</h3>
              </div>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                <li>{t('tutorial.platforms.windows.step1')}</li>
                <li>{t('tutorial.platforms.windows.step2')}</li>
                <li>{t('tutorial.platforms.windows.step3')}</li>
                <li>{t('tutorial.platforms.windows.step4')}</li>
                <li>{t('tutorial.platforms.windows.step5')}</li>
                <li>{t('tutorial.platforms.windows.step6')}</li>
              </ol>
            </div>

            {/* macOS */}
            <div className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('tutorial.platforms.macos.title')}</h3>
              </div>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                <li>{t('tutorial.platforms.macos.step1')}</li>
                <li>{t('tutorial.platforms.macos.step2')}</li>
                <li>{t('tutorial.platforms.macos.step3')}</li>
                <li>{t('tutorial.platforms.macos.step4')}</li>
                <li>{t('tutorial.platforms.macos.step5')}</li>
                <li>{t('tutorial.platforms.macos.step6')}</li>
              </ol>
            </div>

            {/* Linux */}
            <div className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489-.068.023-.139.053-.209.064z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('tutorial.platforms.linux.title')}</h3>
              </div>
              <ol className="space-y-3 text-gray-600 list-decimal list-inside">
                <li>{t('tutorial.platforms.linux.step1')}</li>
                <li>{t('tutorial.platforms.linux.step2')}</li>
                <li>{t('tutorial.platforms.linux.step3')}</li>
                <li>{t('tutorial.platforms.linux.step4')}</li>
                <li>{t('tutorial.platforms.linux.step5')}</li>
              </ol>
            </div>

            {/* Mobile */}
            <div className="rounded-xl bg-white border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{t('tutorial.platforms.mobile.title')}</h3>
              </div>
              <p className="text-gray-600 mb-4">
                {t('tutorial.platforms.mobile.description')}
              </p>
              <ul className="space-y-2 text-gray-600 list-disc list-inside ml-4">
                <li><strong>{t('tutorial.platforms.mobile.iosLabel')}</strong> {t('tutorial.platforms.mobile.iosApps')}</li>
                <li><strong>{t('tutorial.platforms.mobile.androidLabel')}</strong> {t('tutorial.platforms.mobile.androidApps')}</li>
              </ul>
              <p className="text-gray-600 mt-4">
                {t('tutorial.platforms.mobile.instructions')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Applications */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('tutorial.applicationsTitle')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tutorial.applications.office.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.applications.office.description')}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tutorial.applications.libreoffice.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.applications.libreoffice.description')}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tutorial.applications.cyberduck.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.applications.cyberduck.description')}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{t('tutorial.applications.media.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.applications.media.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">{t('tutorial.troubleshootingTitle')}</h2>

          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{t('tutorial.troubleshooting.connection.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.troubleshooting.connection.description')}
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{t('tutorial.troubleshooting.auth.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.troubleshooting.auth.description')}
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-2">{t('tutorial.troubleshooting.performance.title')}</h3>
              <p className="text-gray-600 text-sm">
                {t('tutorial.troubleshooting.performance.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-3xl bg-primary px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">{t('tutorial.supportCTA.title')}</h2>
            <p className="text-blue-100 mb-8">
              {t('tutorial.supportCTA.subtitle')}
            </p>
            <a
              href="/fr/support"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 font-semibold text-primary hover:bg-gray-100 transition-colors shadow-lg"
            >
              {t('tutorial.supportCTA.button')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
