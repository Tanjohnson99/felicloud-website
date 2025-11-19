import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Felicloud - Secure European Cloud Storage',
  description: 'Lifetime cloud storage plans with GDPR compliance. 10 GB free forever. 100% EU hosted servers.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
