/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve modern formats; Vercel resizes and caches them automatically.
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
