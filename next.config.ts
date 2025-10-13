import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'dev.healthincloud.app',
      },
      {
        protocol: 'https',
        hostname: 'fr.tipeee.com',
      },
    ],
  },
};

export default nextConfig;
