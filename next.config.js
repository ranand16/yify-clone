/** @type {import('next').NextConfig} */
const nextConfig = {
  theme: {
    extend: {
      maxWidth: {
        cardWidth: "220px",
      },
    },
  },
  experimental: {
    appDir: true,
  },
  images: { domains: ["image.tmdb.org"] },
};

module.exports = nextConfig;
