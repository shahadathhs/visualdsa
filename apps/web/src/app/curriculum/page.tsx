import type { Metadata } from 'next';
import { CurriculumGrid } from '@/components/home/curriculum-grid';
import { CurriculumStats } from '@/components/home/curriculum-stats';
import { PageHero } from '@/components/site/page-hero';
import { phases } from '@/data/curriculum';

export const metadata: Metadata = {
  title: 'Curriculum',
  description:
    'The full VisualDSA curriculum — data structures and algorithms, in depth, across five tracks from foundations to advanced.',
};

export default function CurriculumPage() {
  const topicCount = phases.reduce((sum, p) => sum + p.topics.length, 0);

  return (
    <>
      <PageHero
        eyebrow="Curriculum"
        title={<>Both data structures and algorithms, in depth.</>}
        subtitle={
          <>
            {phases.length} phases across five tracks and {topicCount}+ topics —
            sequenced so you always know what to learn next. Each topic pairs
            theory, an interactive visualization, Python code, and practice.
          </>
        }
      >
        <CurriculumStats />
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-16">
        <CurriculumGrid />
      </div>
    </>
  );
}
