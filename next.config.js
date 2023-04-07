/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media.licdn.com",
      "mdbootstrap.com",
      "static.wixstatic.com",
      "images.unsplash.com",
      "quantum.ntu.edu.tw",
      "scontent.ftpe7-2.fna.fbcdn.net",
    ],
  },
};

module.exports = nextConfig;
