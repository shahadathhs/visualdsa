import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { mdxComponents } from '@/components/mdx';
import { getLesson, hasLesson, listLessons } from '@/lib/content';
import { phases } from '@/data/curriculum';

export function generateStaticParams() {
  // One page per lesson that has content (Phase 00 → 8 pages).
  return listLessons().map(({ phase, topic }) => ({ slug: phase, topic }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}): Promise<Metadata> {
  const { slug, topic } = await params;
  const lesson = getLesson(slug, topic);
  if (!lesson) return {};
  const phase = phases.find((p) => p.slug === slug);
  return {
    title: phase ? `${lesson.title} · ${phase.title}` : lesson.title,
    description: `Lesson: ${lesson.title} — part of the ${phase?.title ?? ''} phase in VisualDSA.`,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string; topic: string }>;
}) {
  const { slug, topic } = await params;
  const lesson = getLesson(slug, topic);
  if (!lesson) notFound();

  const phase = phases.find((p) => p.slug === slug);
  const topics = phase?.topics ?? [];
  const index = topics.findIndex((t) => t.slug === topic);

  const prevTopic = index > 0 ? topics[index - 1] : null;
  const nextTopic =
    index >= 0 && index < topics.length - 1 ? topics[index + 1] : null;

  const prev = prevTopic && hasLesson(slug, prevTopic.slug) ? prevTopic : null;
  const next = nextTopic && hasLesson(slug, nextTopic.slug) ? nextTopic : null;

  return (
    <div className="mx-auto max-w-3xl px-5 py-16">
      {/* breadcrumb */}
      <nav className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
        <Link href="/" className="transition-colors hover:text-fg">
          Home
        </Link>
        <span className="text-muted/40">/</span>
        <Link href="/curriculum" className="transition-colors hover:text-fg">
          Curriculum
        </Link>
        <span className="text-muted/40">/</span>
        <Link
          href={`/curriculum/${slug}`}
          className="transition-colors hover:text-fg"
        >
          {phase?.title ?? slug}
        </Link>
      </nav>

      <header className="mt-6">
        <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
          {phase?.title}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          {lesson.title}
        </h1>
      </header>

      <article className="mt-8 pb-4 text-[15px]">
        <MDXRemote source={lesson.body} components={mdxComponents} />
      </article>

      {/* prev / next */}
      <nav className="mt-12 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/curriculum/${slug}/${prev.slug}`}
            className="group rounded-lg border border-line bg-surface p-3 transition-colors hover:border-emerald-500/40"
          >
            <span className="font-mono text-xs text-muted/60">← Previous</span>
            <p className="mt-1 text-sm font-medium">{prev.title}</p>
          </Link>
        ) : (
          <Link
            href={`/curriculum/${slug}`}
            className="group rounded-lg border border-line bg-surface p-3 transition-colors hover:border-emerald-500/40"
          >
            <span className="font-mono text-xs text-muted/60">← Back</span>
            <p className="mt-1 text-sm font-medium">{phase?.title}</p>
          </Link>
        )}
        {next ? (
          <Link
            href={`/curriculum/${slug}/${next.slug}`}
            className="group rounded-lg border border-line bg-surface p-3 text-right transition-colors hover:border-emerald-500/40"
          >
            <span className="font-mono text-xs text-muted/60">Next →</span>
            <p className="mt-1 text-sm font-medium">{next.title}</p>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
