export default function SignupPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Crie Sua Conta
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Comece com 10 GB grátis, sem cartão de crédito necessário
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="João Silva"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Endereço de E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="joao@exemplo.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={8}
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Pelo menos 8 caracteres"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-900">
                    Escolha Seu Plano
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="free">Grátis - 10 GB</option>
                    <option value="lifetime-100gb">Vitalício 100 GB - €99</option>
                    <option value="lifetime-1tb">Vitalício 1 TB - €299</option>
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
                    Concordo com os{' '}
                    <a href="/pt/legal/terms/" className="text-primary hover:underline">
                      Termos de Serviço
                    </a>{' '}
                    e a{' '}
                    <a href="/pt/legal/privacy/" className="text-primary hover:underline">
                      Política de Privacidade
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
                >
                  Criar Conta
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Já tem uma conta?{' '}
                <a href="/pt/login/" className="text-primary font-semibold hover:underline">
                  Entrar
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
