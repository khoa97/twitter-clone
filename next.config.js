/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['pbs.twimg.com'],
  },
  env: {
    NEWS_API_TOKEN: process.env.NEWS_API_TOKEN,
    TWITTER_BEARER_TOKEN: process.env.TWITTER_BEARER_TOKEN,
  },
};
