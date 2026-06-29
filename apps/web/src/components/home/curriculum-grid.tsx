import Link from 'next/link';
import { phases, tracks, type PhaseStatus } from '@/data/curriculum';

export const statusStyles: Record<PhaseStatus, string> = {
  ready: 'text-emerald-400',
  'in-progress': 'text-amber-400',
  planned: 'text-muted/60',
};

export const statusLabel: Record<PhaseStatus, string> = {
  ready: 'Ready',
  'in-progress': 'In progress',
  planned: 'Planned',
};

const cardClass =
  'group block h-full rounded-lg border border-line bg-surface p-4 transition-colors hover:border-emerald-500/40';

function PhaseCard({
  phase,
  index,
}: {
  phase: (typeof phases)[number];
  index: number;
}) {
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted/60">
          {String(index).padStart(2, '0')}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 text-xs ${statusStyles[phase.status]}`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {statusLabel[phase.status]}
        </span>
      </div>

      <h3 className="mt-2 text-base font-medium">{phase.title}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted">{phase.blurb}</p>

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
}

/**
 * The track-grouped curriculum grid. Reusable — rendered on the dedicated
 * /curriculum page (and anywhere else the full roadmap is needed).
 */
export function CurriculumGrid() {
  const order = new Map(phases.map((p, i) => [p.slug, i] as const));

  return (
    <div className="space-y-12">
      {tracks.map((track) => {
        const trackPhases = phases.filter((p) => p.track === track.id);
        if (trackPhases.length === 0) return null;

        return (
          <div key={track.id}>
            <div className="flex items-baseline gap-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-fg">
                {track.label}
              </h3>
              <span className="h-px flex-1 bg-line" />
              <span className="text-xs text-muted">{track.blurb}</span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trackPhases.map((phase) => {
                const index = order.get(phase.slug) ?? 0;
                return (
                  <Link
                    key={phase.slug}
                    href={`/curriculum/${phase.slug}`}
                    className={cardClass}
                  >
                    <PhaseCard phase={phase} index={index} />
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
