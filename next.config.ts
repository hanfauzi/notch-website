import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [40, 75],
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
