import Link from 'next/link';

export default function BlogPage() {
  // Sample blog posts - to be replaced with actual content later
  const posts = [
    {
      id: 1,
      title: 'Getting Started with Felicloud: A Complete Guide',
      excerpt: 'Learn how to set up your Felicloud account and start syncing your files across all your devices in minutes.',
      date: 'November 17, 2024',
      author: 'Felicloud Team',
      category: 'Getting Started',
      readTime: '5 min read',
    },
    {
      id: 2,
      title: 'Why European Cloud Hosting Matters for Your Privacy',
      excerpt: 'Discover the benefits of GDPR-compliant cloud storage and why hosting in the EU protects your data.',
      date: 'November 15, 2024',
      author: 'Felicloud Team',
      category: 'Privacy',
      readTime: '7 min read',
    },
    {
      id: 3,
      title: 'Top 5 Features You Didn\'t Know Felicloud Had',
      excerpt: 'Explore advanced features that make Felicloud more than just cloud storage - from calendars to collaborative documents.',
      date: 'November 12, 2024',
      author: 'Felicloud Team',
      category: 'Features',
      readTime: '6 min read',
    },
  ];

  const categories = ['All', 'Getting Started', 'Privacy', 'Features', 'Updates', 'Tips & Tricks'];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Felicloud Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tips, updates, and insights about cloud storage, privacy, and making the most of Felicloud
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-gray-200 bg-white sticky top-0 z-10 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-4 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`whitespace-nowrap rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                  category === 'All'
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
                    href={`/en/blog/${post.id}`}
                    className="text-sm font-semibold text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    Read more
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
              More articles coming soon! Stay tuned for tutorials, privacy guides, and product updates.
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Subscribe to our newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest blog posts, product updates, and cloud storage tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="flex-1 max-w-md rounded-lg border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-8 py-3 font-semibold text-white hover:bg-primary/90 transition-colors shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
