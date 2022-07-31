/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.gr-assets.com', 'books.google.pl']
  }
};

module.exports = nextConfig;
