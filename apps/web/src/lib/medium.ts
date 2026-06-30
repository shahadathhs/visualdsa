import type { BlogPost } from '@/data/blog';

const FEED_URL = 'https://medium.com/feed/@shahadathhs';

function extract(block: string, tag: string): string {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i'),
  );
  return match ? match[1].trim() : '';
}

function clean(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/<[^>]*>/g, '')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Fetch the author's Medium articles from the public RSS feed and parse them
 * into typed posts. Cached for one day via Next ISR (`revalidate: 86400`) —
 * the “refresh if the cache is a day old” requirement, handled server-side.
 * Returns an empty array on any failure so callers can render a fallback.
 */
export async function getMediumPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(FEED_URL, {
      next: { revalidate: 86400 },
      headers: { Accept: 'application/rss+xml, application/xml, text/xml' },
    });
    if (!res.ok) return [];

    const xml = await res.text();
    const items = xml.match(/<item>([\s\S]*?)<\/item>/gi) ?? [];

    const posts: BlogPost[] = items
      .map((block) => {
        const title = clean(extract(block, 'title'));
        const link = clean(extract(block, 'link'));
        const pubDate = extract(block, 'pubDate');
        const description = clean(extract(block, 'description')).slice(0, 180);
        const categories = Array.from(
          block.matchAll(/<category>([\s\S]*?)<\/category>/gi),
        )
          .map((m) => clean(m[1]))
          .filter(Boolean)
          .slice(0, 3);

        return {
          title: title || 'Untitled',
          href: link || '#',
          description,
          date: pubDate ? new Date(pubDate).toISOString() : '',
          platform: 'medium' as const,
          tags: categories,
        };
      })
      .filter((post) => post.href !== '#');

    return posts.slice(0, 6);
  } catch {
    return [];
  }
}
