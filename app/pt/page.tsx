import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { SocialProof } from '@/components/sections/social-proof';
import { Comparison } from '@/components/sections/comparison';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero lang="pt" />
      <Features lang="pt" />
      <SocialProof lang="pt" />
      <Comparison lang="pt" />
      <CTA lang="pt" />
    </>
  );
}
