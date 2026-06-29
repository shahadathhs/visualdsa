import Link from 'next/link';
import { phases, type PhaseStatus } from '@/data/curriculum';

const statusStyles: Record<PhaseStatus, string> = {
  ready: 'text-emerald-400',
  'in-progress': 'text-amber-400',
  planned: 'text-muted/60',
};

const statusLabel: Record<PhaseStatus, string> = {
  ready: 'Ready',
  'in-progress': 'In progress',
  planned: 'Planned',
};

export function Curriculum() {
  return (
    <section id="curriculum" className="mx-auto max-w-6xl px-5 py-20">
      <div className="max-w-2xl">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          Curriculum
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          A path from zero to dynamic programming.
        </h2>
        <p className="mt-3 text-muted">
          Thirteen phases, sequenced so you always know what to learn next. Each
          topic pairs theory, an interactive visualization, Python code, and
          practice.
        </p>
      </div>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {phases.map((phase) => {
          const enabled = phase.status !== 'planned';
          const card = (
            <>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted/60">
                  {String(phase.index).padStart(2, '0')}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 text-xs ${statusStyles[phase.status]}`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {statusLabel[phase.status]}
                </span>
              </div>

              <h3 className="mt-2 text-base font-medium">{phase.title}</h3>
              <p className="mt-1 line-clamp-2 text-sm text-muted">
                {phase.blurb}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {phase.topics.slice(0, 3).map((topic) => (
                  <span
                    key={topic.slug}
                    className="rounded-md border border-line px-2 py-0.5 text-[11px] text-muted"
                  >
                    {topic.title}
                  </span>
                ))}
                {phase.topics.length > 3 && (
                  <span className="px-1 py-0.5 text-[11px] text-muted/60">
                    +{phase.topics.length - 3} more
                  </span>
                )}
              </div>
            </>
          );

          const className =
            'group block h-full rounded-lg border border-line bg-surface p-4 transition-colors hover:border-emerald-500/40';

          return enabled ? (
            <Link
              key={phase.slug}
              href={`/${phase.slug}`}
              className={className}
            >
              {card}
            </Link>
          ) : (
            <div key={phase.slug} className={className} aria-disabled="true">
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}
