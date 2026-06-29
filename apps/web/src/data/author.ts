export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export type Project = {
  name: string;
  href: string;
  description: string;
  stack: string[];
};

export const author = {
  name: 'Shahadath Hossen Sajib',
  firstName: 'Shahadath',
  initials: 'SH',
  role: 'Backend Engineer',
  roleDetail: 'Node.js · Python · Microservices & DevOps',
  location: 'Chattogram, Bangladesh',
  summary:
    'Backend engineer building scalable, secure, and high-performance systems — RESTful APIs, data layers, real-time features, background processing, and AI-integrated services. I work primarily with Node.js, NestJS, Python, FastAPI, and TypeScript, and ship to production with Docker, CI/CD, and AWS.',
  email: 'shahadathhossensajib732@gmail.com',
  resume:
    'https://drive.google.com/file/d/1dtZCEgZyof-qrUreeVpXDlOovosegpuf/view',
  portfolio: 'https://shahadathhs.vercel.app',
  github: 'https://github.com/shahadathhs',
} as const;

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/shahadathhs',
    handle: '@shahadathhs',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/shahadathhs',
    handle: 'in/shahadathhs',
  },
  { label: 'X', href: 'https://x.com/shahadathhs', handle: '@shahadathhs' },
  {
    label: 'Medium',
    href: 'https://medium.com/@shahadathhs',
    handle: '@shahadathhs',
  },
  {
    label: 'Substack',
    href: 'https://shahadathhs.substack.com',
    handle: 'shahadathhs.substack.com',
  },
  {
    label: 'LeetCode',
    href: 'https://leetcode.com/u/shahadathhs',
    handle: 'u/shahadathhs',
  },
];

export const focusAreas: { title: string; description: string }[] = [
  {
    title: 'Scalable backends',
    description:
      'Modular Node.js & NestJS services with clean boundaries that stay maintainable as they grow.',
  },
  {
    title: 'Data layers',
    description:
      'PostgreSQL, MongoDB, and Redis — schemas and access patterns tuned for real-world load.',
  },
  {
    title: 'Real-time & async',
    description:
      'WebSockets, WebRTC, and queues (BullMQ) for live features and background processing.',
  },
  {
    title: 'DevOps & delivery',
    description:
      'Docker, CI/CD, AWS, and Nginx/Caddy — automated pipelines and reliable production runtimes.',
  },
];

export const stack: StackGroup[] = [
  { label: 'Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
  {
    label: 'Backend',
    items: ['Node.js', 'NestJS', 'FastAPI', 'Express'],
  },
  {
    label: 'Databases & ORMs',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Drizzle'],
  },
  {
    label: 'Real-time & jobs',
    items: ['Socket.IO', 'WebRTC', 'BullMQ'],
  },
  {
    label: 'DevOps & cloud',
    items: [
      'Docker',
      'AWS (EC2, S3)',
      'GitHub Actions',
      'Nginx',
      'Caddy',
      'PM2',
    ],
  },
];

export const experience: Experience[] = [
  {
    role: 'Backend Developer',
    company: 'Digital Pylot',
    period: 'Feb 2026 — Present',
    location: 'Dhaka, Bangladesh',
    points: [
      'Contributing to a large-scale, configurable microservices backend.',
      'Building scalable services, complex workflows, and AI & communication integrations across modules.',
    ],
  },
  {
    role: 'Backend Developer',
    company: 'Softvence Agency',
    period: 'Jul 2025 — Feb 2026',
    location: 'Dhaka, Bangladesh',
    points: [
      'Built real-time logistics & trip tracking (Uber-style) with dynamic routing and map integrations.',
      'Engineered payments, HR/scheduling workflows, and AI-powered automation.',
      'Designed PostgreSQL schemas (Prisma/Drizzle) and deployed AWS infrastructure.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Monster Studio',
    period: 'Aug 2024 — Apr 2025',
    location: 'Chattogram, Bangladesh',
    points: [
      'Contributed to 20+ production websites in a large-scale monorepo; led the frontend team.',
      'Built an AI-powered document assistant, a custom CMS, and creator tooling.',
    ],
  },
];

export const projects: Project[] = [
  {
    name: 'systemix',
    href: 'https://github.com/shahadathhs/systemix',
    description:
      'Modular, high-performance toolkit for secure and scalable JavaScript/TypeScript systems.',
    stack: ['TypeScript'],
  },
  {
    name: 'local-mail-stack',
    href: 'https://github.com/shahadathhs/local-mail-stack',
    description:
      'Self-hosted, professional-grade email system (real SMTP/IMAP) with a premium web UI.',
    stack: ['TypeScript'],
  },
  {
    name: 'rag',
    href: 'https://github.com/shahadathhs/rag',
    description:
      'NestJS Retrieval-Augmented Generation app with MongoDB vector storage and Ollama chat.',
    stack: ['TypeScript'],
  },
  {
    name: 'voice-to-text',
    href: 'https://github.com/shahadathhs/voice-to-text',
    description:
      'Local voice-to-text API with OpenAI Whisper — offline transcription and diarization.',
    stack: ['Python'],
  },
  {
    name: 'barisathi',
    href: 'https://github.com/shahadathhs/barisathi',
    description:
      'Full-stack smart rental housing platform connecting landlords, tenants, and admins.',
    stack: ['TypeScript'],
  },
  {
    name: 'knowledge-capsule',
    href: 'https://github.com/shahadathhs/knowledge-capsule',
    description:
      'Go backend service for bite-sized “knowledge capsules” organized by topics and tags.',
    stack: ['Go'],
  },
];

export const mission =
  'I built VisualDSA to make data structures & algorithms intuitive, not intimidating — the interactive, Python-first classroom I wish I’d had when learning: visual, focused on why things work, and free for everyone.';
