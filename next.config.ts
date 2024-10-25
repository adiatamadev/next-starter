import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:300'
      ]
    },
  },

};

export default nextConfig;
