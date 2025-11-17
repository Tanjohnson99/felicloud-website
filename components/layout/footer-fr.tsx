import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2">
            <Link href="/fr" className="flex items-center gap-2">
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
              Stockage Cloud Européen Sécurisé
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Produit</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/fr/features" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="/fr/pricing" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Légal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/fr/legal/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link href="/fr/legal/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="/fr/legal/gdpr" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  RGPD
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 Felicloud. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
