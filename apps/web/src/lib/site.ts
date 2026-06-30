export const site = {
  name: 'VisualDSA',
  tagline: 'Make DSA intuitive, not intimidating.',
  description:
    'VisualDSA is the interactive classroom for data structures & algorithms — step-by-step SVG visualizations, Python-first walkthroughs, and a structured path from foundations to dynamic programming.',
  // Used for metadataBase / OG URL resolution. Set NEXT_PUBLIC_SITE_URL in prod.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  github: 'https://github.com/shahadathhs/visualdsa',
  author: 'Shahadath Hossen Sajib',
} as const;

/** Primary navigation — rendered in the site header. */
export const nav = [
  { label: 'Curriculum', href: '/curriculum' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
] as const;
