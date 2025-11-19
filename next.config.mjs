/** @type {import('next').NextConfig} */
const nextConfig = {
  // Server mode enabled for API routes, webhooks, and secure backend operations
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
