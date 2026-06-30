import { setBaseUrl } from '@visualdsa/api-client';

// Server-side API access layer. Configures the base URL once, at module load,
// and re-exports the plain (non-hook) generated functions for Server Components.
// `NEXT_PUBLIC_API_URL` is inlined at build time and is available on the server.
setBaseUrl(process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000');

export { appControllerHealth } from '@visualdsa/api-client';
