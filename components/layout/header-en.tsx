'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const navigation = [
    { name: 'Features', href: '/en/features' },
    { name: 'Pricing', href: '/en/pricing' },
    { name: 'Download', href: '/en/download' },
    { name: 'About', href: '/en/about' },
  ];

  const languages = [
    { code: 'en', name: 'English', href: '/en' },
    { code: 'fr', name: 'Français', href: '/fr' },
    { code: 'pt', name: 'Português', href: '/pt' },
    { code: 'es', name: 'Español', href: '/es' },
    { code: 'it', name: 'Italiano', href: '/it' },
    { code: 'de', name: 'Deutsch', href: '/de' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        {/* Logo horizontal */}
        <div className="flex lg:flex-1">
          <Link href="/en" className="-m-1.5 p-1.5 flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <Image
              className="h-10 w-auto"
              src="/logo.svg"
              alt="Felicloud"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-gray-900">Felicloud</span>
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
              <span>EN</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-1">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={lang.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                  >
                    {lang.name}
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
            Sign In
          </Link>

          {/* Signup button */}
          <Link
            href="/en/signup"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors cursor-pointer"
          >
            Sign Up
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
                  Language (English)
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
                  {languages.map((lang) => (
                    <Link
                      key={lang.code}
                      href={lang.href}
                      className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileLangOpen(false);
                      }}
                    >
                      {lang.name}
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
                Sign In
              </Link>
              <Link
                href="/en/signup"
                className="block w-full rounded-lg bg-primary px-3 py-2.5 text-center text-base font-semibold text-white hover:bg-primary/90 transition-colors cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
