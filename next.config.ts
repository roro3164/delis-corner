import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "delicity.b-cdn.net",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
