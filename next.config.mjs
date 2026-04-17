/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static HTML export enable korbe
  images: {
    unoptimized: true, // Static export er jonno eta proyojon
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;