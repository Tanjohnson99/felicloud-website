import { Hero } from '@/components/sections/hero';
import { Features } from '@/components/sections/features';
import { SocialProof } from '@/components/sections/social-proof';
import { Comparison } from '@/components/sections/comparison';
import { CTA } from '@/components/sections/cta';

export default function HomePage() {
  return (
    <>
      <Hero lang="fr" />
      <Features lang="fr" />
      <SocialProof lang="fr" />
      <Comparison lang="fr" />
      <CTA lang="fr" />
    </>
  );
}
