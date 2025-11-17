'use client';

import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    // Redirect to English by default
    window.location.replace('/en/');
  }, []);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <p>Redirecting to Felicloud...</p>
    </div>
  );
}
