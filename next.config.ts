import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  // Раскомментируйте для статического экспорта на Shared Hosting (Namecheap Stellar Plus):
  // output: 'export',
  // images: {
  //   unoptimized: true,  // Обязательно для статического экспорта
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  // outputFileTracingRoot: path.resolve(__dirname, '../../'), // Commented out for Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  }
};

export default nextConfig;
// Orchids restart: 1767755685175
