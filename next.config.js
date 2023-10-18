/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'avatars.githubusercontent.com',
            port: '',
            pathname: '/u/**'
          },
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/*.png'
          }
        ],
      },
      env: {
        SERVER_HOSTNAME: process.env.SERVER_HOSTNAME,
      },
}

module.exports = nextConfig
