/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-nexlink.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '22527425.fs1.hubspotusercontent-na1.net',
        port: '',
        pathname: '/hubfs/**',
      }
    ],
    domains: ['images.unsplash.com'],
  },
}

module.exports = nextConfig 