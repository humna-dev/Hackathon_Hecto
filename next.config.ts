import { NextConfig } from 'next';

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'], // Add external image domains here
  },
};

export default config;
