'use client';

import { useEffect, useState } from 'react';

type Step = {
  array: number[];
  compare: [number, number] | null;
  message: string;
};

// A hard-coded bubble-sort pass. Mirrors the real `Step` contract used by
// `@visualdsa/algorithms` — a snapshot of state + a human explanation per step.
const STEPS: Step[] = [
  {
    array: [4, 2, 7, 1, 6, 3],
    compare: [0, 1],
    message: 'compare arr[0]=4, arr[1]=2',
  },
  { array: [2, 4, 7, 1, 6, 3], compare: [1, 2], message: '4 < 7 — keep' },
  {
    array: [2, 4, 7, 1, 6, 3],
    compare: [2, 3],
    message: 'compare arr[2]=7, arr[3]=1',
  },
  { array: [2, 4, 1, 7, 6, 3], compare: [3, 4], message: '7 > 6 — swap' },
  { array: [2, 4, 1, 6, 7, 3], compare: [4, 5], message: '7 > 3 — swap' },
  {
    array: [2, 4, 1, 6, 3, 7],
    compare: null,
    message: 'largest value placed — pass 1',
  },
];

const W = 250;
const PAD = 8;
const BASE_Y = 118;
const HEADROOM = 16;

export function AlgoDemo() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;
    const id = setInterval(() => setI((p) => (p + 1) % STEPS.length), 900);
    return () => clearInterval(id);
  }, []);

  const step = STEPS[i];
  const max = Math.max(...step.array);
  const n = step.array.length;
  const slot = (W - PAD * 2) / n;
  const bw = slot * 0.66;

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/40">
      {/* window chrome / faux control bar */}
      <div className="flex items-center justify-between border-b border-line px-4 py-2.5">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="text-emerald-400">●</span>
          bubble_sort.py
        </div>
        <div
          className="flex items-center gap-1.5 text-muted/70"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M8 5v14l11-7z" />
          </svg>
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
            <path d="M6 5h2v14H6zM10 5h2v14h-2zM16 5l4 7-4 7z" />
          </svg>
        </div>
      </div>

      {/* visualization */}
      <div className="p-4">
        <svg
          viewBox={`0 0 ${W} 130`}
          className="h-32 w-full"
          role="img"
          aria-label="Bubble sort animation"
        >
          {step.array.map((v, k) => {
            const h = (v / max) * (BASE_Y - HEADROOM);
            const x = PAD + k * slot + (slot - bw) / 2;
            const y = BASE_Y - h;
            const active =
              step.compare != null &&
              (k === step.compare[0] || k === step.compare[1]);
            return (
              <g key={k}>
                <rect
                  x={x}
                  y={y}
                  width={bw}
                  height={h}
                  rx={3}
                  fill={active ? '#34d399' : '#3f3f46'}
                  style={{
                    transition: 'y .35s ease, height .35s ease, fill .2s ease',
                  }}
                />
                <text
                  x={x + bw / 2}
                  y={BASE_Y + 10}
                  textAnchor="middle"
                  className="fill-muted font-mono"
                  style={{ fontSize: 8 }}
                >
                  {v}
                </text>
              </g>
            );
          })}
        </svg>

        <div className="mt-2 flex items-center justify-between font-mono text-[11px]">
          <span className="text-muted">{step.message}</span>
          <span className="text-muted/50">
            step {i + 1}/{STEPS.length}
          </span>
        </div>
      </div>
    </div>
  );
}
