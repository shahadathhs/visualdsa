import type { Metadata } from 'next';
import Link from 'next/link';
import {
  author,
  experience,
  focusAreas,
  mission,
  projects,
  socials,
  stack,
} from '@/data/author';

export const metadata: Metadata = {
  title: `About — ${author.name}`,
  description: `${author.role} — ${author.roleDetail}. ${author.summary}`,
};

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H8M17 7v9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16">
      <Link
        href="/"
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
        Home
      </Link>

      {/* header */}
      <header className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-xl font-semibold text-emerald-400">
          {author.initials}
        </div>
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">
            {author.name}
          </h1>
          <p className="mt-1 text-muted">
            {author.role} · {author.roleDetail}
          </p>
          <p className="mt-1 font-mono text-xs text-muted/60">
            {author.location}
          </p>
        </div>
      </header>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
        {author.summary}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={author.portfolio}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          Portfolio <ExternalIcon />
        </a>
        <a
          href={`mailto:${author.email}`}
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-elevated"
        >
          Email
        </a>
        <a
          href={author.resume}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium transition-colors hover:bg-elevated"
        >
          Resume <ExternalIcon />
        </a>
      </div>

      {/* focus */}
      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
          What I do
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="rounded-lg border border-line bg-surface p-4"
            >
              <h3 className="text-sm font-medium">{area.title}</h3>
              <p className="mt-1 text-sm text-muted">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* stack */}
      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
          Tech stack
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div
              key={group.label}
              className="rounded-lg border border-line bg-surface p-4"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-muted/60">
                {group.label}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-line px-2 py-0.5 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* experience */}
      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
          Experience
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((job) => (
            <div
              key={`${job.company}-${job.period}`}
              className="flex h-full flex-col rounded-lg border border-line bg-surface p-4"
            >
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-sm font-medium">{job.role}</h3>
                <span className="font-mono text-[11px] text-muted/60">
                  {job.period}
                </span>
              </div>
              <p className="text-sm text-emerald-400">{job.company}</p>
              <p className="font-mono text-[11px] text-muted/60">
                {job.location}
              </p>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* projects */}
      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
          Selected projects
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group flex h-full flex-col rounded-lg border border-line bg-surface p-4 transition-colors hover:border-emerald-500/40"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">{project.name}</h3>
                <span className="text-muted/50 transition-colors group-hover:text-emerald-400">
                  <ExternalIcon />
                </span>
              </div>
              <p className="mt-1.5 flex-1 text-sm text-muted">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* mission */}
      <section className="mt-16 rounded-lg border border-line bg-surface p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
          Why I built VisualDSA
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
          {mission}
        </p>
      </section>

      {/* connect */}
      <section className="mt-16">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
          Connect
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-line px-3 py-1.5 text-sm transition-colors hover:bg-elevated"
            >
              <span>{social.label}</span>
              <span className="font-mono text-xs text-muted/60">
                {social.handle}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
