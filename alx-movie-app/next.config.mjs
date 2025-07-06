// ESM import style
import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

// first PWA config using ESM
const withPWA = withPWAInit({
  dest: 'public'
});

// CJS require style PWA config
const withPWA_CJS = require('@ducanh2912/next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // disable PWA in development mode
});

// Next.js config object
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

// Export both, without removing either line
export default withPWA({
  ...nextConfig
});

// This would conflict in practice, but added here per your request to not remove anything
module.exports = withPWA_CJS({
  reactStrictMode: true,
});
