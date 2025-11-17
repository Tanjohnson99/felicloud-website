export default function SignupPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Créer Votre Compte
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Commencez avec 10 GB gratuits, aucune carte de crédit requise
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Nom Complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Adresse E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="jean@exemple.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Mot de Passe
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={8}
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Au moins 8 caractères"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-900">
                    Choisissez Votre Plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="free">Gratuit - 10 GB</option>
                    <option value="lifetime-100gb">Vie 100 GB - €99</option>
                    <option value="lifetime-1tb">Vie 1 TB - €299</option>
                  </select>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    required
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <label htmlFor="terms" className="ml-3 text-sm text-gray-600">
                    J'accepte les{' '}
                    <a href="/fr/legal/terms/" className="text-primary hover:underline">
                      Conditions d'utilisation
                    </a>{' '}
                    et la{' '}
                    <a href="/fr/legal/privacy/" className="text-primary hover:underline">
                      Politique de confidentialité
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
                >
                  Créer un Compte
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Vous avez déjà un compte ?{' '}
                <a href="/fr/login/" className="text-primary font-semibold hover:underline">
                  Se connecter
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
