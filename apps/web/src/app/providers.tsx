'use client';

import { useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setBaseUrl } from '@visualdsa/api-client';

// Point the generated client at the API. `NEXT_PUBLIC_API_URL` is inlined at
// build time; default to the local NestJS server for dev.
setBaseUrl(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000');

export function Providers({ children }: { children: ReactNode }) {
  // Stable client across renders (per react-query's Next.js guidance).
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
