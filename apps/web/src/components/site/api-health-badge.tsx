import { appControllerHealth } from '@/lib/api';

// Server Component: fetches API health at request time. The call is cached for
// 30s via Next's fetch caching so it doesn't hit the API on every page render.
async function getHealth() {
  try {
    await appControllerHealth({ next: { revalidate: 30 } });
    return true;
  } catch {
    return false;
  }
}

export async function ApiHealthBadge() {
  const online = await getHealth();

  const state = online
    ? { label: 'online', dot: 'bg-emerald-500', text: 'text-emerald-400' }
    : { label: 'offline', dot: 'bg-rose-500', text: 'text-rose-400' };

  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs"
      title={`API status: ${state.label}`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${state.dot}${online ? ' animate-pulse' : ''}`}
      />
      <span className={state.text}>api {state.label}</span>
    </span>
  );
}
