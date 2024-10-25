import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */

  experimental: {
    serverActions: {
      allowedOrigins: [
        'effective-rotary-phone-jjq94gjvjjgjfxrg-3000.app.github.dev', 'localhost:300'
      ]
    },
  },

};

export default nextConfig;
