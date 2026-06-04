import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Memory optimisation for large-scale builds (100K pages)
  experimental: {
    webpackMemoryOptimizations: true,
  },
  // Allow BillingBee logo from remote domain
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "billingbee.co",
      },
      {
        protocol: "https",
        hostname: "www.billingbee.co",
      },
    ],
  },
};

export default nextConfig;
