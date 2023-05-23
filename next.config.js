/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: '/example',
        has: [
          {
            type: 'header',
            key: 'host',
            value: 'sn-glossary.com',
          },
        ],
        destination: '/',
        permanent: false,
      },
      {
        source: '/features',
        has: [
          {
            type: 'header',
            key: 'host',
            value: 'sn-glossary.com',
          },
        ],
        destination: '/',
        permanent: false,
      },
    ]
  },
};

module.exports = nextConfig;
