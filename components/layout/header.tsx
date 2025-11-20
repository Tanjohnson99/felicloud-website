'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useTranslation } from '@/lib/hooks/useTranslation';

interface HeaderProps {
  lang?: string;
}

export function Header({ lang = 'en' }: HeaderProps) {
  const { t } = useTranslation(lang);
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const navigation = [
    { name: t('nav.features'), href: `/${lang}/features` },
    { name: t('nav.pricing'), href: `/${lang}/pricing` },
    { name: t('nav.download'), href: `/${lang}/download` },
    { name: t('nav.about'), href: `/${lang}/about` },
  ];

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

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo horizontal */}
        <div className="flex lg:flex-1">
          <Link href={`/${lang}`} className="-m-1.5 p-1.5 flex items-center cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              className="h-10 w-auto"
              src="/images/logo.svg"
              alt={t('common.brandName')}
              width={40}
              height={40}
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Language selector + Auth buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          {/* Language selector with globe icon */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 hover:text-primary transition-colors cursor-pointer">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              <span>{lang.toUpperCase()}</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-1">
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={l.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {l.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sign In button */}
          <Link
            href="https://cloud.felicloud.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors cursor-pointer"
          >
            {t('common.signIn')}
          </Link>

          {/* Signup button */}
          <Link
            href={`/${lang}/signup`}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors cursor-pointer"
          >
            {t('common.signUp')}
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {/* Navigation items */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Language selector for mobile */}
            <div className="border-t border-gray-200 pt-4">
              <button
                onClick={() => setMobileLangOpen(!mobileLangOpen)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  {t('common.language')} ({currentLang.name})
                </span>
                <svg
                  className={`h-5 w-5 transition-transform ${mobileLangOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {mobileLangOpen && (
                <div className="mt-2 ml-6 space-y-2">
                  {languages.map((l) => (
                    <Link
                      key={l.code}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileLangOpen(false);
                      }}
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Auth buttons */}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              <Link
                href="https://cloud.felicloud.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg border-2 border-gray-300 px-3 py-2.5 text-center text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.signIn')}
              </Link>
              <Link
                href={`/${lang}/signup`}
                className="block w-full rounded-lg bg-primary px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('common.signUp')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
