'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from '@/lib/hooks/useTranslation';

interface FooterProps {
  lang?: string;
}

export function Footer({ lang = 'en' }: FooterProps) {
  const { t } = useTranslation(lang);
  const pathname = usePathname();

  // Helper function to get the current path in a different language
  const getLocalizedPath = (newLang: string) => {
    if (!pathname) return `/${newLang}`;
    // Replace the current language with the new one
    // e.g., /en/pricing -> /fr/pricing
    const pathWithoutLang = pathname.replace(/^\/(en|fr|pt)(\/|$)/, '/');
    return `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
  };

  // Only show languages that have routes available
  const languages = [
    { code: 'en', name: t('languages.en'), href: getLocalizedPath('en') },
    { code: 'fr', name: t('languages.fr'), href: getLocalizedPath('fr') },
    { code: 'pt', name: t('languages.pt'), href: getLocalizedPath('pt') },
    // TODO: Add other languages when their routes are created
    // { code: 'es', name: t('languages.es'), href: getLocalizedPath('es') },
    // { code: 'it', name: t('languages.it'), href: getLocalizedPath('it') },
    // { code: 'de', name: t('languages.de'), href: getLocalizedPath('de') },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo, description and social media */}
          <div className="md:col-span-2 lg:col-span-1">
            <Link href={`/${lang}`} className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt={t('common.brandName')}
                width={40}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              {t('common.tagline')}
            </p>

            {/* Social media */}
            <div className="mt-6 flex gap-4">
              <a
                href="https://facebook.com/felicloud"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/felicloudsecurecloudstorage/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('footer.product')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/features`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.features')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/pricing`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/download`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.download')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('footer.support')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/help`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.helpCenter')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.contactSupport')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/download`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.downloadApps')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/faq`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('footer.company')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/about`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('nav.blog')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('footer.legal')}</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href={`/${lang}/legal/terms`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.termsOfService')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/legal/privacy`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/legal/gdpr`} className="text-sm text-gray-600 hover:text-primary transition-colors">
                  {t('footer.gdpr')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with language selector and copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-center text-sm text-gray-600">
            {t('common.copyright')}
          </p>

          {/* Language selector */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors px-3 py-2 rounded-lg hover:bg-gray-100">
              {/* Globe icon */}
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>{lang.toUpperCase()}</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute bottom-full right-0 mb-2 w-40 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-1">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={l.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
