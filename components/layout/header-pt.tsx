'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Recursos', href: '/pt/features' },
    { name: 'Preços', href: '/pt/pricing' },
    { name: 'Sobre', href: '/pt/about' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧', href: '/en' },
    { code: 'fr', name: 'Français', flag: '🇫🇷', href: '/fr' },
    { code: 'pt', name: 'Português', flag: '🇵🇹', href: '/pt' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/pt" className="-m-1.5 p-1.5">
            <span className="sr-only">Felicloud</span>
            <Image
              className="h-10 w-auto"
              src="/logo.svg"
              alt="Felicloud"
              width={40}
              height={40}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Abrir menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4 lg:items-center">
          <div className="relative group">
            <button className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-primary transition-colors">
              <span>🇵🇹</span>
              <span>Português</span>
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              <div className="py-1">
                {languages.map((lang) => (
                  <Link
                    key={lang.code}
                    href={lang.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <Link href="/pt/signup">
            <Button>Inscrever-se</Button>
          </Link>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 px-6 pb-6 pt-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-gray-200 pt-4 space-y-2">
              {languages.map((lang) => (
                <Link
                  key={lang.code}
                  href={lang.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </Link>
              ))}
            </div>
            <div className="pt-4">
              <Link href="/pt/signup" className="block w-full">
                <Button className="w-full">Inscrever-se</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
