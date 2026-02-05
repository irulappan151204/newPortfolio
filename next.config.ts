import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn5.f-cdn.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn3.f-cdn.com', // Freelancer.com CDN
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Unsplash for project images
      },
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com', // GitHub user content
      },
      {
        protocol: 'https',
        hostname: 'www.freelancer.com',
      },
    ],
    formats: ['image/avif', 'image/webp'], // AVIF first for better compression
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // Cache for 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: false,
  },
  
  // Performance optimizations
  swcMinify: true, // Use SWC minifier for better performance
  poweredByHeader: false, // Remove x-powered-by header
  
  // Enable compression
  compress: true,
  
  // Experimental features for better performance
  experimental: {
    // Enable modern bundling
    turbo: {
      loaders: {
        '.svg': ['@svgr/webpack'],
      },
    },
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
