const lines: { text: string; hl?: boolean }[] = [
  { text: 'class BackendEngineer {' },
  { text: "  name  = 'SAJIB';" },
  { text: "  role  = 'Backend';", hl: true },
  { text: "  focus = 'Scalability';" },
  { text: "  stack = ['Node.js', 'Python'];" },
  { text: "  apis  = ['NestJS', 'FastAPI'];" },
  { text: "  ships = ['Docker', 'CI/CD', 'AWS'];" },
  { text: '}' },
];

export function EngineerSnippet() {
  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <span className="font-mono text-xs text-muted">engineer.ts</span>
        <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
          typescript
        </span>
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-6">
        <code>
          {lines.map((line, k) => (
            <div
              key={k}
              className={`-mx-4 px-4 ${line.hl ? 'bg-emerald-500/10' : ''}`}
            >
              <span className={line.hl ? 'text-emerald-300' : 'text-fg/90'}>
                {line.text}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
