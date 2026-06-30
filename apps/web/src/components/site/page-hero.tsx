import Link from 'next/link';
import type { ReactNode } from 'react';

/**
 * Full-width page hero — mirrors the home hero: grid background + emerald glow,
 * two columns (heading left, a page-specific visual right). Body content goes
 * in a separate max-w container below.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  backHref = '/',
  backLabel = 'Home',
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  backHref?: string;
  backLabel?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--color-line) 1px, transparent 1px), linear-gradient(to bottom, var(--color-line) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage:
            'radial-gradient(ellipse 75% 60% at 50% 0%, black 35%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 60% at 50% 0%, black 35%, transparent 75%)',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:py-20">
        <div>
          <Link
            href={backHref}
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                d="M19 12H5M11 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {backLabel}
          </Link>

          <p className="mt-6 font-mono text-xs uppercase tracking-wider text-emerald-400">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <div className="mt-4 max-w-xl text-muted">{subtitle}</div>
          ) : null}
        </div>

        {children ? <div className="lg:pl-6">{children}</div> : null}
      </div>
    </section>
  );
}
