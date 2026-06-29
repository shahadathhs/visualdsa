import Link from 'next/link';
import { phases } from '@/data/curriculum';

const highlights = [
  'programming-refresher',
  'arrays',
  'searching',
  'dynamic-programming',
];

export function CurriculumTeaser() {
  const topicCount = phases.reduce((sum, p) => sum + p.topics.length, 0);
  const order = new Map(phases.map((p, i) => [p.slug, i] as const));
  const picked = phases.filter((p) => highlights.includes(p.slug));

  return (
    <section id="curriculum" className="mx-auto max-w-6xl px-5 py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            Curriculum
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Both data structures and algorithms, in depth.
          </h2>
          <p className="mt-3 text-muted">
            {phases.length} phases across five tracks and {topicCount}+ topics —
            from your first loop to dynamic programming.
          </p>
        </div>
        <Link
          href="/curriculum"
          className="inline-flex shrink-0 items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-elevated"
        >
          View full curriculum
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {picked.map((phase) => {
          const index = order.get(phase.slug) ?? 0;
          return (
            <Link
              key={phase.slug}
              href={`/curriculum/${phase.slug}`}
              className="group rounded-lg border border-line bg-surface p-4 transition-colors hover:border-emerald-500/40"
            >
              <span className="font-mono text-xs text-muted/60">
                {String(index).padStart(2, '0')} · {phase.track}
              </span>
              <h3 className="mt-2 text-base font-medium">{phase.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted">
                {phase.blurb}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
