import { phases, tracks } from '@/data/curriculum';

export function CurriculumStats() {
  const topicCount = phases.reduce((sum, p) => sum + p.topics.length, 0);
  const counts = tracks.map((t) => ({
    label: t.label,
    count: phases.filter((p) => p.track === t.id).length,
  }));
  const max = Math.max(...counts.map((c) => c.count));

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-xs text-muted">curriculum.json</span>
        <span className="font-mono text-[11px] text-emerald-400">
          ● overview
        </span>
      </div>

      <div className="space-y-2.5 p-4">
        {counts.map((c) => (
          <div key={c.label} className="flex items-center gap-3">
            <span className="w-32 shrink-0 text-sm">{c.label}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-elevated">
              <div
                className="h-full rounded-full bg-emerald-400"
                style={{ width: `${(c.count / max) * 100}%` }}
              />
            </div>
            <span className="w-6 text-right font-mono text-xs text-muted">
              {c.count}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-line px-4 py-3 font-mono text-xs text-muted">
        <span>{phases.length} phases</span>
        <span>{topicCount}+ topics</span>
      </div>
    </div>
  );
}
