import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // 🔑 Keep this for static export
  // REMOVE basePath and assetPrefix
  images: {
    unoptimized: true,        // 🔑 Keep this for GitHub Pages
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