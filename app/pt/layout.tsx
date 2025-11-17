import '../globals.css';
import { Header } from '@/components/layout/header-pt';
import { Footer } from '@/components/layout/footer-pt';

export const metadata = {
  title: 'Felicloud - Armazenamento em Nuvem Europeu Seguro',
  description: 'Planos de armazenamento em nuvem vitalícios com conformidade GDPR. 10 GB grátis para sempre. 100% hospedado na UE.',
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
