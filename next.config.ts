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
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
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
  // Target modern browsers to reduce legacy JavaScript polyfills
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  // outputFileTracingRoot: path.resolve(__dirname, '../../'), // Commented out for Vercel deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  // Turbopack configuration - DISABLED
  // Note: Turbopack was causing runtime errors, using standard webpack instead
  // If you need to re-enable Turbopack, uncomment below:
  // ...(process.env.NODE_ENV === 'development' ? {
  //   turbopack: {
  //     rules: {
  //       "*.{jsx,tsx}": {
  //         loaders: [LOADER]
  //       }
  //     }
  //   }
  // } : {})
};

export default nextConfig;
// Orchids restart: 1767755685175
