/** @type {import('next').NextConfig} */
require('dotenv').config();
const withVideos = require('next-videos')


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fullstacknftmarketplace.infura-ipfs.io", "infura-ipfs.io"],
  },
};

module.exports = nextConfig;
module.exports = withVideos();