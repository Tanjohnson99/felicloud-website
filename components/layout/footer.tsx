'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');
  const locale = useLocale();

  const productLinks = [
    { name: tNav('features'), href: `/${locale}/features` },
    { name: tNav('pricing'), href: `/${locale}/pricing` },
  ];

  const companyLinks = [
    { name: tNav('about'), href: `/${locale}/about` },
  ];

  const legalLinks = [
    { name: 'Terms of Service', href: `/${locale}/legal/terms` },
    { name: 'Privacy Policy', href: `/${locale}/legal/privacy` },
    { name: 'GDPR', href: `/${locale}/legal/gdpr` },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Felicloud"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-gray-900">Felicloud</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              {t('tagline')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('product')}</h3>
            <ul className="mt-4 space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{t('legal')}</h3>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
