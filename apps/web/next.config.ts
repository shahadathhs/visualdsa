import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: [
    '@visualdsa/types',
    '@visualdsa/utils',
    '@visualdsa/ui',
    '@visualdsa/visualizer',
    '@visualdsa/algorithms',
    '@visualdsa/content',
  ],
};

export default nextConfig;
