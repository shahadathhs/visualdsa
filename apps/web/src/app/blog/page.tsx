import type { Metadata } from 'next';
import Link from 'next/link';
import { BlogCard } from '@/components/blog/blog-card';
import { BlogFeed } from '@/components/blog/blog-feed';
import { featured, platforms } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing on backend engineering, system design, and DevOps — by Shahadath Hossen Sajib, the builder of VisualDSA.',
};

export default function BlogPage() {
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
          Blog
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Writing on backend, system design &amp; DevOps.
        </h1>
        <p className="mt-3 text-muted">
          Articles on building scalable systems, getting them to production, and
          the lessons learned along the way.
        </p>
      </header>

      {/* platforms */}
      <section className="mt-10 grid gap-3 sm:grid-cols-2">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-lg border border-line bg-surface p-5 transition-colors hover:border-emerald-500/40"
          >
            <div>
              <h2 className="text-base font-medium">{platform.name}</h2>
              <p className="mt-1 text-sm text-muted">{platform.description}</p>
            </div>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4 shrink-0 text-muted/50 transition-colors group-hover:text-emerald-400"
              aria-hidden="true"
            >
              <path
                d="M7 17L17 7M17 7H8M17 7v9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        ))}
      </section>

      {/* featured local long-read */}
      <section className="mt-12">
        <div className="flex items-baseline gap-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted/70">
            Featured
          </h2>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="mt-4">
          <BlogCard post={featured} />
        </div>
      </section>

      {/* live Medium feed (API + localStorage cache) */}
      <BlogFeed />
    </div>
  );
}
