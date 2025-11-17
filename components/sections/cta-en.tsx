'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Your Lifetime Cloud Today
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
            Join thousands of users who trust Felicloud with their data
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/en/signup">
              <Button size="lg" variant="secondary" className="shadow-xl">
                Get Started Free
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
