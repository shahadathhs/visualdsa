import { features, type FeatureIcon } from '@/data/features';

function Icon({ name }: { name: FeatureIcon }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-5 w-5',
    'aria-hidden': true,
  };
  switch (name) {
    case 'visualize':
      return (
        <svg {...common}>
          <path d="M3 3v18h18" />
          <path d="M7 14l3-3 3 3 5-6" />
        </svg>
      );
    case 'python':
      return (
        <svg {...common}>
          <path d="M8 9l-3 3 3 3" />
          <path d="M16 9l3 3-3 3" />
          <path d="M13 7l-2 10" />
        </svg>
      );
    case 'explain':
      return (
        <svg {...common}>
          <path d="M21 12a8 8 0 1 1-3.5-6.6L21 4l-1 4 .5.1" />
          <path d="M9 11h6M9 14h4" />
        </svg>
      );
    case 'path':
      return (
        <svg {...common}>
          <path d="M4 19l5-5 4 3 7-9" />
          <circle cx="4" cy="19" r="1.5" />
          <circle cx="20" cy="8" r="1.5" />
        </svg>
      );
  }
}

export function Differentiators() {
  return (
    <section id="features" className="border-y border-line bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title}>
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                <Icon name={feature.icon} />
              </span>
              <h3 className="mt-3 text-sm font-medium">{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
