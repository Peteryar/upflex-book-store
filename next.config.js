/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['i.gr-assets.com', 'books.google.pl']
  }
};

module.exports = nextConfig;
