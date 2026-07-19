/** @type {import('next').NextConfig} */
const nextConfig = {
  // Hosted on Vercel: no static export or basePath needed (those were
  // GitHub Pages requirements), and /api/* routes power the CMS login.
  reactStrictMode: true,
  async redirects() {
    return [
      // The content manager is a static page in public/admin/.
      { source: "/admin", destination: "/admin/index.html", permanent: false },
    ];
  },
};

export default nextConfig;
