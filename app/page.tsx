'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.split('-')[0];
    const supportedLangs = ['en', 'fr', 'pt'];
    const defaultLang = 'en'; // DEFAULT = EN

    const targetLang = supportedLangs.includes(browserLang) ? browserLang : defaultLang;

    // Redirect to the appropriate language
    router.replace(`/${targetLang}`);
  }, [router]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to Felicloud...</p>
    </div>
  );
}
