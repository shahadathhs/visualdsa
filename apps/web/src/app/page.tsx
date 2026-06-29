import { Hero } from '@/components/home/hero';
import { Differentiators } from '@/components/home/differentiators';
import { CodePreview } from '@/components/home/code-preview';
import { CurriculumTeaser } from '@/components/home/curriculum-teaser';

export default function Home() {
  return (
    <>
      <Hero />
      <Differentiators />
      <CodePreview />
      <CurriculumTeaser />
    </>
  );
}
