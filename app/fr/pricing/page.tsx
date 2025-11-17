export default function PricingPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Tarification Simple et Transparente
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Payez une fois, utilisez pour toujours. Pas de frais récurrents, pas de coûts cachés.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">Gratuit</h3>
              <p className="mt-4 text-sm text-gray-600">Parfait pour commencer</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€0</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Pour toujours</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">10 GB de Stockage</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Tous les appareils</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Chiffrement de bout en bout</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Serveurs UE</span>
                </li>
              </ul>

              <a href="/fr/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                  Commencer
                </button>
              </a>
            </div>

            <div className="relative rounded-2xl border-2 border-primary bg-white p-8 shadow-xl ring-2 ring-primary">
              <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-4 py-1 text-sm font-semibold text-white">
                Le Plus Populaire
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Vie 100GB</h3>
              <p className="mt-4 text-sm text-gray-600">Paiement unique</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€99</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Payez une fois, utilisez pour toujours</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600"><strong>100 GB de Stockage</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Tous les appareils</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Support prioritaire</span>
                </li>
              </ul>

              <a href="/fr/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-primary px-6 py-3 text-center text-white hover:bg-primary-dark transition-colors shadow-lg">
                  Commencer
                </button>
              </a>
            </div>

            <div className="relative rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900">Vie 1TB</h3>
              <p className="mt-4 text-sm text-gray-600">Paiement unique</p>
              <p className="mt-6">
                <span className="text-5xl font-bold text-gray-900">€299</span>
              </p>
              <p className="mt-2 text-sm text-gray-600">Payez une fois, utilisez pour toujours</p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600"><strong>1 TB de Stockage</strong></span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="ml-3 text-gray-600">Support dédié</span>
                </li>
              </ul>

              <a href="/fr/signup/" className="mt-8 block">
                <button className="w-full rounded-lg bg-gray-900 px-6 py-3 text-center text-white hover:bg-gray-800 transition-colors">
                  Commencer
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
