import { useTranslation } from '@/lib/hooks/useTranslation';

interface SocialProofProps {
  lang?: string;
}

export function SocialProof({ lang = 'en' }: SocialProofProps) {
  const { t } = useTranslation(lang);

  const stats = [
    { value: '10,000+', label: t('socialProof.activeUsers') },
    { value: '99.9%', label: t('socialProof.uptimeSLA') },
    { value: '50+', label: t('socialProof.countries') },
    { value: '5PB+', label: t('socialProof.dataStored') },
  ];

  const testimonials = [
    {
      quote: t('socialProof.testimonial1Quote'),
      author: t('socialProof.testimonial1Author'),
      role: t('socialProof.testimonial1Role'),
      avatar: "MD"
    },
    {
      quote: t('socialProof.testimonial2Quote'),
      author: t('socialProof.testimonial2Author'),
      role: t('socialProof.testimonial2Role'),
      avatar: "TS"
    },
    {
      quote: t('socialProof.testimonial3Quote'),
      author: t('socialProof.testimonial3Author'),
      role: t('socialProof.testimonial3Role'),
      avatar: "SR"
    }
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Stats */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {t('socialProof.title')}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {t('socialProof.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-2 gap-8 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center justify-center rounded-2xl bg-gray-50 p-8">
              <div className="text-4xl font-bold text-primary">{stat.value}</div>
              <div className="mt-2 text-sm text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mx-auto mt-24 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 shadow-sm">
            <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <span className="font-semibold text-gray-900">{t('socialProof.gdprCompliant')}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 shadow-sm">
            <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
            <span className="font-semibold text-gray-900">{t('socialProof.e2eEncryption')}</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 shadow-sm">
            <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
            <span className="font-semibold text-gray-900">{t('socialProof.euHosted')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
