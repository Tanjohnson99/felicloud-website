import { Hero } from '@/components/sections/hero-pt';
import { Features } from '@/components/sections/features-pt';
import { Comparison } from '@/components/sections/comparison-pt';
import { CTA } from '@/components/sections/cta-pt';

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
