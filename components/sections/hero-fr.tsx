import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Stockage Cloud Européen en qui Vous Pouvez Avoir Confiance
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Plans à vie • Conforme RGPD • 100% hébergé en UE
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/fr/signup">
              <Button size="lg">Obtenez 10 GB Gratuits</Button>
            </Link>
            <Link href="/fr/pricing">
              <Button size="lg" variant="outline">
                Voir les Tarifs
              </Button>
            </Link>
          </div>
          <div className="mt-16">
            <div className="relative rounded-2xl bg-white/50 p-8 shadow-2xl ring-1 ring-gray-900/10 backdrop-blur">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <svg className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
