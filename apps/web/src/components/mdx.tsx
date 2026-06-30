import type { ReactNode } from 'react';

/**
 * Custom components used when rendering lesson MDX, so the content is styled
 * to the VisualDSA design system. Pass this map to `next-mdx-remote/rsc`.
 */
export const mdxComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-10 text-xl font-semibold tracking-tight">{children}</h2>
  ),
  h3: ({ children }: { children?: ReactNode }) => (
    <h3 className="mt-6 text-base font-semibold">{children}</h3>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mt-4 leading-relaxed text-muted">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted">{children}</ul>
  ),
  ol: ({ children }: { children?: ReactNode }) => (
    <ol className="mt-4 list-decimal space-y-1.5 pl-5 text-muted">
      {children}
    </ol>
  ),
  a: ({ children, href }: { children?: ReactNode; href?: string }) => (
    <a
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noreferrer' : undefined}
      className="text-emerald-400 underline underline-offset-2 hover:text-emerald-300"
    >
      {children}
    </a>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold text-fg">{children}</strong>
  ),
  code: ({
    children,
    className,
  }: {
    children?: ReactNode;
    className?: string;
  }) =>
    // `className` (e.g. `language-python`) is only set on fenced code blocks,
    // which are already wrapped by `pre` — so render them plain and only style
    // inline code.
    className ? (
      <code className={className}>{children}</code>
    ) : (
      <code className="rounded border border-line bg-elevated px-1.5 py-0.5 font-mono text-[0.85em] text-fg">
        {children}
      </code>
    ),
  pre: ({ children }: { children?: ReactNode }) => (
    <pre className="mt-4 overflow-x-auto rounded-lg border border-line bg-surface p-4 font-mono text-xs leading-6">
      {children}
    </pre>
  ),
  blockquote: ({ children }: { children?: ReactNode }) => (
    <blockquote className="mt-4 border-l-2 border-emerald-500/50 bg-emerald-500/5 px-4 py-2 text-muted">
      {children}
    </blockquote>
  ),
  table: ({ children }: { children?: ReactNode }) => (
    <div className="mt-4 overflow-x-auto">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }: { children?: ReactNode }) => (
    <th className="border border-line bg-surface px-3 py-1.5 text-left font-medium">
      {children}
    </th>
  ),
  td: ({ children }: { children?: ReactNode }) => (
    <td className="border border-line px-3 py-1.5 text-muted">{children}</td>
  ),
};
