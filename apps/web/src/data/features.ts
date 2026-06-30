export type FeatureIcon = 'visualize' | 'python' | 'explain' | 'path';

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
    icon: 'path',
    title: 'Structured learning path',
    description:
      'A guided curriculum from your first loop to dynamic programming, so you always know what to learn next.',
  },
];
