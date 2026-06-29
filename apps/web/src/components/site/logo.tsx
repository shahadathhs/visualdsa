import Link from 'next/link';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className ?? ''}`}
      aria-label="VisualDSA home"
    >
      <span className="text-emerald-400 transition-transform group-hover:-translate-y-0.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="13"
            width="4"
            height="8"
            rx="1"
            fill="currentColor"
            opacity=".45"
          />
          <rect
            x="10"
            y="8"
            width="4"
            height="13"
            rx="1"
            fill="currentColor"
            opacity=".75"
          />
          <rect x="17" y="4" width="4" height="17" rx="1" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[15px] font-semibold tracking-tight">
        Visual<span className="text-emerald-400">DSA</span>
      </span>
    </Link>
  );
}
