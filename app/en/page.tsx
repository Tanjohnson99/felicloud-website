import { Hero } from '@/components/sections/hero-en';
import { Features } from '@/components/sections/features-en';
import { Comparison } from '@/components/sections/comparison-en';
import { CTA } from '@/components/sections/cta-en';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Comparison />
      <CTA />
    </>
  );
}
