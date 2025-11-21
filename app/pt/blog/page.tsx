'use client';

import Link from 'next/link';
import { useTranslation } from '@/lib/hooks/useTranslation';

export default function BlogPage() {
  const { t } = useTranslation('pt');

  // Sample blog posts - to be replaced with actual content later
  const posts = [
    {
      id: 1,
      title: t('blog.post1Title'),
      excerpt: t('blog.post1Excerpt'),
      date: t('blog.post1Date'),
      author: t('blog.post1Author'),
      category: t('blog.post1Category'),
      readTime: t('blog.post1ReadTime'),
    },
    {
      id: 2,
      title: t('blog.post2Title'),
      excerpt: t('blog.post2Excerpt'),
      date: t('blog.post2Date'),
      author: t('blog.post2Author'),
      category: t('blog.post2Category'),
      readTime: t('blog.post2ReadTime'),
    },
    {
      id: 3,
      title: t('blog.post3Title'),
      excerpt: t('blog.post3Excerpt'),
      date: t('blog.post3Date'),
      author: t('blog.post3Author'),
      category: t('blog.post3Category'),
      readTime: t('blog.post3ReadTime'),
    },
  ];

  const categories = [
    t('blog.categoryAll'),
    t('blog.categoryGettingStarted'),
    t('blog.categoryPrivacy'),
    t('blog.categoryFeatures'),
    t('blog.categoryUpdates'),
    t('blog.categoryTips'),
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              {t('blog.heroTitle')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {t('blog.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  index === 0
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group relative flex flex-col rounded-2xl border-2 border-gray-200 bg-white p-6 hover:border-primary hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2 text-xs text-gray-600 mb-4">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-primary font-semibold">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="text-sm text-gray-500">
                    {post.date}
                  </div>
                  <Link
                    href={`/pt/blog/${post.id}`}
                    className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    {t('blog.readMore')}
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-6 py-3 text-sm text-blue-700 border border-blue-200">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {t('blog.comingSoon')}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t('blog.newsletterTitle')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t('blog.newsletterSubtitle')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={t('blog.newsletterPlaceholder')}
                required
                className="flex-1 max-w-md rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 transition-colors shadow-lg"
              >
                {t('blog.newsletterButton')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
