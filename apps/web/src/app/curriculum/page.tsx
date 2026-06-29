import type { Metadata } from 'next';
import Link from 'next/link';
import { CurriculumGrid } from '@/components/home/curriculum-grid';
import { phases } from '@/data/curriculum';

export const metadata: Metadata = {
  title: 'Curriculum',
  description:
    'The full VisualDSA curriculum — data structures and algorithms, in depth, across five tracks from foundations to advanced.',
};

export default function CurriculumPage() {
  const topicCount = phases.reduce((sum, p) => sum + p.topics.length, 0);

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-4 w-4"
          aria-hidden="true"
        >
          <path
            d="M19 12H5M11 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Home
      </Link>

      <header className="mt-6 max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          Curriculum
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Both data structures and algorithms, in depth.
        </h1>
        <p className="mt-3 text-muted">
          {phases.length} phases across five tracks and {topicCount}+ topics —
          sequenced so you always know what to learn next. Each topic pairs
          theory, an interactive visualization, Python code, and practice.
        </p>
      </header>

      <div className="mt-12">
        <CurriculumGrid />
      </div>
    </div>
  );
}
