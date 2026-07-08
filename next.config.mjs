/**
 * GitHub Pages serves project sites under /<repo-name>, so the deploy
 * workflow sets NEXT_PUBLIC_BASE_PATH; local dev leaves it unset.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static-friendly: no server-only features are used anywhere in the app,
  // so this exports to plain HTML for GitHub Pages or any static host.
  output: "export",
  // Emit pages as folder/index.html so GitHub Pages serves both /laptops
  // and /laptops/ (without this, /laptops/ is a 404).
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
