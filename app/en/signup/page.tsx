export default function SignupPage() {
  return (
    <div className="bg-white">
      <section className="py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Create Your Account
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Start with 10 GB free, no credit card required
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-8 shadow-lg">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    minLength={8}
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="At least 8 characters"
                  />
                </div>

                <div>
                  <label htmlFor="plan" className="block text-sm font-medium text-gray-900">
                    Choose Your Plan
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="free">Free - 10 GB</option>
                    <option value="lifetime-100gb">Lifetime 100 GB - €99</option>
                    <option value="lifetime-1tb">Lifetime 1 TB - €299</option>
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
                    I agree to the{' '}
                    <a href="/en/legal/terms/" className="text-primary hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/en/legal/privacy/" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary px-6 py-4 text-lg font-semibold text-white hover:bg-primary-dark transition-colors shadow-lg"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-gray-600">
                Already have an account?{' '}
                <a href="/en/login/" className="text-primary font-semibold hover:underline">
                  Sign in
                </a>
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 grid grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">10 GB</div>
                <div className="mt-1 text-sm text-gray-600">Free Forever</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="mt-1 text-sm text-gray-600">EU Hosted</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">GDPR</div>
                <div className="mt-1 text-sm text-gray-600">Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
