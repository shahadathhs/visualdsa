const code: { text: string; hl?: boolean }[] = [
  { text: 'def linear_search(arr, target):' },
  { text: '    for i, val in enumerate(arr):' },
  {
    text: '        yield {"index": i, "message": f"Compare {val} to {target}"}',
    hl: true,
  },
  { text: '        if val == target:' },
  {
    text: '            yield {"found": i, "message": "Target found!"}',
    hl: true,
  },
  { text: '            return i' },
  { text: '    yield {"message": "Not found"}' },
];

export function CodePreview() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 py-20">
      <div className="grid items-center gap-10 lg:grid-cols-5">
        {/* code */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
              <span className="font-mono text-xs text-muted">
                linear_search.py
              </span>
              <span className="rounded border border-line px-1.5 py-0.5 font-mono text-[10px] text-muted">
                python
              </span>
            </div>
            <pre className="overflow-x-auto p-4 font-mono text-xs leading-6">
              <code>
                {code.map((line, k) => (
                  <div
                    key={k}
                    className={`flex -mx-4 px-4 ${line.hl ? 'bg-emerald-500/10' : ''}`}
                  >
                    <span className="mr-4 inline-block w-5 select-none text-right text-muted/40">
                      {k + 1}
                    </span>
                    <span
                      className={line.hl ? 'text-emerald-300' : 'text-fg/90'}
                    >
                      {line.text}
                    </span>
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>

        {/* annotation */}
        <div className="lg:col-span-2">
          <p className="font-mono text-xs uppercase tracking-wider text-emerald-400">
            How it works
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight">
            Algorithms yield steps. The visualizer plays them.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Every algorithm is a generator that yields a snapshot of its state —
            the data, what just happened, and why. The visualization engine
            consumes those steps, so the animation you see is the code, running
            for real.
          </p>
          <ul className="mt-5 space-y-2.5 text-sm text-muted">
            {[
              'One generator per algorithm — logic stays separate from rendering.',
              'Each step carries a human-readable explanation.',
              'Play, pause, step, and scrub at your own pace.',
            ].map((item) => (
              <li key={item} className="flex gap-2.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
