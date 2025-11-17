import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CTA() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Commencez Votre Cloud à Vie Aujourd'hui
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Rejoignez des milliers d'utilisateurs qui font confiance à Felicloud avec leurs données
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/fr/signup">
              <Button size="lg" variant="secondary">
                Commencer Gratuitement
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
