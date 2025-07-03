const withPWA = require('@ducanh2912/next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // disable PWA in development mode
});

module.exports = withPWA({
  reactStrictMode: true,
});
