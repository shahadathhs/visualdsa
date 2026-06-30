import type { Metadata } from 'next';
import { BlogCard } from '@/components/blog/blog-card';
import { PageHero } from '@/components/site/page-hero';
import { getMediumPosts } from '@/lib/medium';
import { platforms } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Writing on backend engineering, system design, and DevOps — by Shahadath Hossen Sajib, the builder of VisualDSA.',
};

export const revalidate = 86400; // refresh the feed once a day (ISR)

export default async function BlogPage() {
  const posts = await getMediumPosts();
  const [latest, ...rest] = posts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Writing on backend, system design &amp; DevOps.</>}
        subtitle={
          <>
            Articles on building scalable systems, getting them to production,
            and the lessons learned along the way.
          </>
        }
      >
        {latest ? (
          <BlogCard post={latest} />
        ) : (
          <a
            href="https://medium.com/@shahadathhs"
            target="_blank"
            rel="noreferrer"
            className="block rounded-lg border border-line bg-surface p-5 transition-colors hover:border-emerald-500/40"
          >
            <p className="text-sm text-muted">
              Latest articles load here from Medium.
            </p>
            <p className="mt-2 text-sm font-medium text-emerald-400">
              Read on Medium →
            </p>
          </a>
        )}
      </PageHero>

      <div className="mx-auto max-w-6xl px-5 py-16">
        {/* platforms */}
        <section className="grid gap-3 sm:grid-cols-2">
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
                <p className="mt-1 text-sm text-muted">
                  {platform.description}
                </p>
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

        {/* more articles */}
        <section className="mt-12">
          <div className="flex items-baseline gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted/70">
              More articles
            </h2>
            <span className="h-px flex-1 bg-line" />
            <span className="text-xs text-muted/50">From Medium</span>
          </div>

          {rest.length > 0 ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post.href} post={post} />
              ))}
            </div>
          ) : (
            <p className="mt-4 rounded-md border border-line bg-surface px-4 py-3 text-sm text-muted">
              No more articles to show right now. Read everything on{' '}
              <a
                href="https://medium.com/@shahadathhs"
                target="_blank"
                rel="noreferrer"
                className="text-emerald-400 hover:underline"
              >
                Medium
              </a>
              .
            </p>
          )}
        </section>
      </div>
    </>
  );
}
