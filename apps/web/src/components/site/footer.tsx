import { Logo } from './logo';
import { site } from '@/lib/site';

const columns = [
  {
    title: 'Curriculum',
    links: [
      { label: 'Foundations', href: '#curriculum' },
      { label: 'Arrays', href: '#curriculum' },
      { label: 'Graphs', href: '#curriculum' },
      { label: 'Dynamic programming', href: '#curriculum' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Research report', href: '/docs/deep-research-report.md' },
      { label: 'Roadmap', href: '#' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: site.github },
      { label: 'Contributing', href: '#' },
      { label: 'Code of conduct', href: '#' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted">{site.tagline}</p>
            <p className="mt-3 font-mono text-xs text-muted/70">
              MIT Licensed · Open source
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
                    <a
                      href={link.href}
                      className="text-sm text-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} VisualDSA. Released under the MIT
            License.
          </p>
          <p className="font-mono">
            Built with Next.js · Prisma · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
