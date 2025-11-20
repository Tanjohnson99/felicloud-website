import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Felicloud - Secure European Cloud Storage',
  description: 'Lifetime cloud storage plans with GDPR compliance. 10 GB free forever. 100% EU hosted servers.',
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Header lang="fr" />
          <main className="flex-1">{children}</main>
          <Footer lang="fr" />
        </div>
      </body>
    </html>
  );
}
