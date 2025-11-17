import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="col-span-2">
            <Link href="/pt" className="flex items-center gap-2">
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
              Armazenamento em Nuvem Europeu Seguro
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Produto</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/pt/features" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/pt/pricing" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/pt/legal/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="/pt/legal/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/pt/legal/gdpr" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-center text-sm text-gray-600">
            © 2024 Felicloud. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
