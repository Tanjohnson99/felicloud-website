import '../globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata = {
  title: 'Felicloud - Armazenamento Cloud Europeu Seguro',
  description: 'Planos de armazenamento cloud vitalícios com conformidade RGPD. 10 GB grátis para sempre. Servidores 100% alojados na UE.',
};

export default function PtLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
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
          <Header lang="pt" />
          <main className="flex-1">{children}</main>
          <Footer lang="pt" />
        </div>
      </body>
    </html>
  );
}
