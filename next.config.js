/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'source.unsplash.com',
          port: '',
          pathname: '/random',
        },
      ],
    },
    serverExternalPackages: ['knex'],
  };  

module.exports = nextConfig
