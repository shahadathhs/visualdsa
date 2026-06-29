export type FeatureIcon = 'visualize' | 'python' | 'explain' | 'open';

export type Feature = {
  icon: FeatureIcon;
  title: string;
  description: string;
};

export const features: Feature[] = [
  {
    icon: 'visualize',
    title: 'Interactive SVG visualizations',
    description:
      'Step through algorithms with play, pause, and speed controls — no static slides.',
  },
  {
    icon: 'python',
    title: 'Python-first walkthroughs',
    description:
      'Idiomatic Python for every algorithm, with line-by-line commentary.',
  },
  {
    icon: 'explain',
    title: 'Explain-as-you-go',
    description:
      'Each step explains what happened and why — not just what to memorize.',
  },
  {
    icon: 'open',
    title: 'Free & open-source',
    description:
      'MIT-licensed and community-driven. No ads, no paywalls, ever.',
  },
];
