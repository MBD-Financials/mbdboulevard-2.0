/** @type {import('next').NextConfig} */
require('dotenv').config();
const withVideos = require('next-videos')
const withPlugins = require("next-compose-plugins");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["fullstacknftmarketplace.infura-ipfs.io", "infura-ipfs.io"],
  }
};

module.exports = withPlugins(
  [[withVideos()]],
  nextConfig
);
// module.exports = nextConfig;
// module.exports = withVideos();