import type { BlogPost } from '@/data/blog';

const platformLabel: Record<BlogPost['platform'], string> = {
  medium: 'Medium',
  substack: 'Substack',
  visualdsa: 'VisualDSA',
};

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

/** Deterministic date formatting (no locale) — safe for SSR + hydration. */
export function formatDate(iso: string): string {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <a
      href={post.href}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-lg border border-line bg-surface p-5 transition-colors hover:border-emerald-500/40"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400">
          {platformLabel[post.platform]}
        </span>
        <span className="text-xs text-muted/60">{formatDate(post.date)}</span>
      </div>

      <h3 className="mt-3 text-base font-medium leading-snug">{post.title}</h3>
      <p className="mt-2 line-clamp-2 flex-1 text-sm text-muted">
        {post.description}
      </p>

      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-line px-1.5 py-0.5 text-[10px] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}
