/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: false,
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
    ];
  },
};

module.exports = nextConfig;
