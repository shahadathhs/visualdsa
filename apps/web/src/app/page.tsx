import { Hero } from '@/components/home/hero';
import { Differentiators } from '@/components/home/differentiators';
import { Curriculum } from '@/components/home/curriculum';
import { CodePreview } from '@/components/home/code-preview';

export default function Home() {
  return (
    <>
      <Hero />
      <Differentiators />
      <CodePreview />
      <Curriculum />
    </>
  );
}
