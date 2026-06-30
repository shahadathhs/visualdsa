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
