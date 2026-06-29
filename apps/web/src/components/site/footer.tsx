import Link from 'next/link';
import { Logo } from './logo';
import { site } from '@/lib/site';
import { author } from '@/data/author';

const blob = (path: string) => `${site.github}/blob/main/${path}`;

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
    title: 'About',
    links: [
      { label: 'About the author', href: '/about' },
      { label: 'Blog', href: '/blog' },
      { label: 'Portfolio', href: author.portfolio },
      { label: 'GitHub', href: site.github },
      { label: 'Resume', href: author.resume },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Research report', href: blob('docs/deep-research-report.md') },
      { label: 'Roadmap', href: blob('TODO.md') },
      { label: 'Contributing', href: blob('CONTRIBUTING.md') },
      { label: 'Code of conduct', href: blob('CODE_OF_CONDUCT.md') },
    ],
  },
];

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
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted">{site.tagline}</p>
            <p className="mt-3 font-mono text-xs text-muted/70">
              Free · No ads · No paywalls
            </p>
          </div>

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

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} VisualDSA · Open source · built for
            learners
          </p>
          <p className="font-mono">
            Built with Next.js · Prisma · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
