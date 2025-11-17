import { Hero } from '@/components/sections/hero-fr';
import { Features } from '@/components/sections/features-fr';
import { Comparison } from '@/components/sections/comparison-fr';
import { CTA } from '@/components/sections/cta-fr';

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
