import { site } from '@/lib/site';

export type BlogPlatform = {
  name: string;
  href: string;
  description: string;
};

export type BlogPost = {
  title: string;
  href: string;
  description: string;
  date: string; // ISO date
  platform: 'medium' | 'substack' | 'visualdsa';
  tags: string[];
  thumbnail?: string;
};

/** Where the author publishes. */
export const platforms: BlogPlatform[] = [
  {
    name: 'Medium',
    href: 'https://medium.com/@shahadathhs',
    description: 'Longer-form articles on backend, system design & DevOps.',
  },
  {
    name: 'Substack',
    href: 'https://shahadathhs.substack.com',
    description: 'Learning in public — from APIs to scalable systems.',
  },
];

/** A local featured long-read, always rendered server-side. */
export const featured: BlogPost = {
  title: 'VisualDSA — Product & Architecture Research',
  description:
    'The full product vision, competitor audit, curriculum, and technical architecture behind VisualDSA.',
  date: '2026-06-29',
  platform: 'visualdsa',
  href: `${site.github}/blob/main/docs/deep-research-report.md`,
  tags: ['Product', 'Architecture', 'DSA'],
};

/**
 * Seed posts — rendered instantly and used as a fallback if the live Medium
 * feed can't be reached. The BlogFeed component refreshes these from the
 * Medium API, cached in localStorage for one day.
 */
export const seedPosts: BlogPost[] = [
  {
    title: 'Big O Notation: Why Your Code Breaks at Scale (And How to Fix It)',
    description:
      'Understand how algorithms behave at scale and why correct code isn’t always scalable code.',
    date: '2026-05-03',
    platform: 'medium',
    href: 'https://javascript.plainenglish.io/big-o-notation-why-your-code-breaks-at-scale-and-how-to-fix-it-825060eda2db',
    tags: ['Algorithms', 'Big-O', 'Performance'],
  },
  {
    title: 'Using Caddy with Docker for Production: A Practical Guide',
    description:
      'Automating HTTPS, reverse proxies, and scalable Docker deployments with clean, real-world patterns.',
    date: '2026-01-25',
    platform: 'medium',
    href: 'https://javascript.plainenglish.io/using-caddy-with-docker-for-production-a-practical-guide-c37f6f8f54ee',
    tags: ['DevOps', 'Docker', 'Caddy'],
  },
];
