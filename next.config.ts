import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // 🔑 Required for static export
  basePath: "/ramathperera-portfolio",
  assetPrefix: "/ramathperera-portfolio/",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
