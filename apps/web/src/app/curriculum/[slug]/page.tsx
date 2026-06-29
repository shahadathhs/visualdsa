import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { phases } from '@/data/curriculum';
import { statusLabel, statusStyles } from '@/components/home/curriculum-grid';

export function generateStaticParams() {
  return phases.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const phase = phases.find((p) => p.slug === slug);
  if (!phase) return {};
  return { title: phase.title, description: phase.blurb };
}

export default async function PhasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = phases.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const phase = phases[index];
  const prev = index > 0 ? phases[index - 1] : null;
  const next = index < phases.length - 1 ? phases[index + 1] : null;
  const trackLabel = phase.track.replace(/-/g, ' ');

  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link
        href="/curriculum"
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
        Curriculum
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-muted/70">
          <span>Phase {String(index).padStart(2, '0')}</span>
          <span className="h-3 w-px bg-line" />
          <span className="capitalize">{trackLabel}</span>
          <span className="h-3 w-px bg-line" />
          <span
            className={`inline-flex items-center gap-1.5 ${statusStyles[phase.status]}`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {statusLabel[phase.status]}
          </span>
        </div>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">
          {phase.title}
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{phase.blurb}</p>
      </header>

      {/* coming soon notice */}
      <div className="mt-8 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
        <p className="text-sm">
          <span className="font-medium text-emerald-400">
            This phase is being built.
          </span>{' '}
          <span className="text-muted">
            Interactive visualizations, Python walkthroughs, and practice
            exercises are coming soon.
          </span>
        </p>
      </div>

      {/* body: topics + info aside */}
      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        {/* topics */}
        <section className="lg:col-span-2">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
            What you&apos;ll learn ({phase.topics.length} topics)
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {phase.topics.map((topic) => (
              <li
                key={topic.slug}
                className="flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3"
              >
                <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-line text-muted/60">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 6v6l4 2"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <span className="text-sm">{topic.title}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* aside */}
        <aside className="space-y-4 lg:col-span-1">
          <div className="rounded-lg border border-line bg-surface p-5">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
              Phase info
            </h2>
            <dl className="mt-3 space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Track</dt>
                <dd className="capitalize">{trackLabel}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Topics</dt>
                <dd>{phase.topics.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Status</dt>
                <dd className={statusStyles[phase.status]}>
                  {statusLabel[phase.status]}
                </dd>
              </div>
            </dl>
          </div>

          <nav className="space-y-3">
            {prev ? (
              <Link
                href={`/curriculum/${prev.slug}`}
                className="group block rounded-lg border border-line bg-surface p-3 transition-colors hover:border-emerald-500/40"
              >
                <span className="font-mono text-xs text-muted/60">
                  ← Previous
                </span>
                <p className="mt-1 text-sm font-medium">{prev.title}</p>
              </Link>
            ) : null}
            {next ? (
              <Link
                href={`/curriculum/${next.slug}`}
                className="group block rounded-lg border border-line bg-surface p-3 transition-colors hover:border-emerald-500/40"
              >
                <span className="font-mono text-xs text-muted/60">Next →</span>
                <p className="mt-1 text-sm font-medium">{next.title}</p>
              </Link>
            ) : null}
          </nav>
        </aside>
      </div>
    </div>
  );
}
