'use client';

import { useEffect, useState } from 'react';
import { BlogCard } from './blog-card';
import { seedPosts, type BlogPost } from '@/data/blog';

const CACHE_KEY = 'visualdsa:blog-feed';
const ONE_DAY = 24 * 60 * 60 * 1000;
// rss2json proxies the Medium RSS feed to JSON with permissive CORS.
const FEED_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=' +
  encodeURIComponent('https://medium.com/feed/@shahadathhs');

type Cache = { fetchedAt: number; posts: BlogPost[] };

function readCache(): Cache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Cache>;
    if (typeof parsed?.fetchedAt !== 'number' || !Array.isArray(parsed.posts)) {
      return null;
    }
    return parsed as Cache;
  } catch {
    return null;
  }
}

function writeCache(posts: BlogPost[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ fetchedAt: Date.now(), posts }),
    );
  } catch {
    /* storage might be unavailable (private mode) — ignore */
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&[a-z]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 180);
}

async function fetchPosts(): Promise<BlogPost[]> {
  const res = await fetch(FEED_URL, { cache: 'no-store' });
  if (!res.ok) throw new Error(`feed responded ${res.status}`);
  const data = (await res.json()) as {
    status?: string;
    items?: {
      title?: string;
      link?: string;
      pubDate?: string;
      thumbnail?: string;
      description?: string;
      categories?: string[];
    }[];
  };
  if (data.status !== 'ok' || !Array.isArray(data.items)) {
    throw new Error('invalid feed payload');
  }
  return data.items.slice(0, 6).map((item) => ({
    title: item.title ?? 'Untitled',
    href: item.link ?? '#',
    description: stripHtml(item.description ?? ''),
    date: item.pubDate ? new Date(item.pubDate).toISOString() : '',
    platform: 'medium' as const,
    tags: Array.isArray(item.categories)
      ? item.categories.filter(Boolean).slice(0, 3)
      : [],
    thumbnail: item.thumbnail || undefined,
  }));
}

export function BlogFeed() {
  // Render seed instantly (matches SSR HTML → no hydration mismatch),
  // then swap to cache/live data in an effect.
  const [posts, setPosts] = useState<BlogPost[]>(seedPosts);
  const [stale, setStale] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const cache = readCache();
    const now = Date.now();

    if (cache) setPosts(cache.posts);

    // Fresh cache (< 1 day) → don't refetch.
    if (cache && now - cache.fetchedAt < ONE_DAY) return;

    // Stale or missing → refresh in the background.
    setStale(true);
    fetchPosts()
      .then((fresh) => {
        if (fresh.length > 0) {
          setPosts(fresh);
          writeCache(fresh);
        }
        setErrored(false);
      })
      .catch(() => setErrored(true))
      .finally(() => setStale(false));
  }, []);

  return (
    <section className="mt-12">
      <div className="flex items-baseline gap-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-muted/70">
          Latest articles
        </h2>
        <span className="h-px flex-1 bg-line" />
        <span className="text-xs text-muted/50">
          {stale ? 'Refreshing…' : 'From Medium'}
        </span>
      </div>

      {errored && (
        <p className="mt-4 rounded-md border border-line bg-surface px-4 py-3 text-sm text-muted">
          Couldn’t refresh the latest articles right now — showing cached posts.
          Read everything on{' '}
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

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.href} post={post} />
        ))}
      </div>
    </section>
  );
}
