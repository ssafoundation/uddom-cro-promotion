/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The landing page is a single route; no remote images are used, so
  // next/image needs no remotePatterns. Product screenshots are CSS placeholders
  // and will be dropped into /public/screenshots later.
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
