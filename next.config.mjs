/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-friendly: no server-only features are used anywhere in the app,
  // so this deploys cleanly to Vercel or any static host.
  reactStrictMode: true,
};

export default nextConfig;
