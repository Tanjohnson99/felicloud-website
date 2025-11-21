import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Felicloud - Stockage Cloud Européen Sécurisé',
  description: 'Formules de stockage cloud à vie avec conformité RGPD. 10 Go gratuits pour toujours. Serveurs 100% hébergés en UE.',
};

export default function FrLayout({
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
