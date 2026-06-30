import Link from 'next/link';
import { Logo } from './logo';
import { site } from '@/lib/site';
import { author, socials as authorSocials } from '@/data/author';

type FooterLink = { label: string; href: string };

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Curriculum',
    links: [
      { label: 'Full curriculum', href: '/curriculum' },
      { label: 'Foundations', href: '/curriculum/programming-refresher' },
      { label: 'Arrays', href: '/curriculum/arrays' },
      { label: 'Graphs', href: '/curriculum/graphs' },
      { label: 'Dynamic programming', href: '/curriculum/dynamic-programming' },
    ],
  },
  {
    title: 'Author',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: author.portfolio },
    ],
  },
];

const footerSocials = authorSocials.filter((s) =>
  ['GitHub', 'LinkedIn', 'X', 'Medium'].includes(s.label),
);

function SocialIcon({ label }: { label: string }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    className: 'h-[18px] w-[18px]',
    'aria-hidden': true,
  };
  switch (label) {
    case 'GitHub':
      return (
        <svg {...common}>
          <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
        </svg>
      );
    case 'LinkedIn':
      return (
        <svg {...common}>
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      );
    case 'X':
      return (
        <svg {...common}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
        </svg>
      );
    case 'Medium':
      return (
        <svg {...common}>
          <path d="M13.54 12a6.08 6.08 0 0 1-6.08 6.08A6.08 6.08 0 0 1 1.38 12 6.08 6.08 0 0 1 7.46 5.92 6.08 6.08 0 0 1 13.54 12zM20.5 12c0 3.04-1.23 5.5-2.74 5.5S15 15.04 15 12s1.23-5.5 2.74-5.5S20.5 8.96 20.5 12zm2.6 0c0 2.72-.46 4.93-1.02 4.93s-1.02-2.21-1.02-4.93.46-4.93 1.02-4.93 1.02 2.21 1.02 4.93z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterItem({ link }: { link: FooterLink }) {
  const internal = link.href.startsWith('/');
  const className = 'text-sm text-muted transition-colors hover:text-fg';

  if (internal) {
    return (
      <Link href={link.href} className={className}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} target="_blank" rel="noreferrer" className={className}>
      {link.label}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* brand + CTA */}
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-muted">{site.tagline}</p>
            <Link
              href="/curriculum"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              Start learning
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
                {col.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <FooterItem link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} VisualDSA · Built for learners
          </p>
          <div className="flex items-center gap-1">
            {footerSocials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted transition-colors hover:bg-elevated hover:text-fg"
              >
                <SocialIcon label={social.label} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
