/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable API routes and server-side features
  // This allows secure handling of SMTP and Nextcloud API calls
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
