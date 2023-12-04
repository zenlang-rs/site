/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/*.png",
      },
    ],
  },
  env: {
    SERVER_HOSTNAME: process.env.SERVER_HOSTNAME || "http://localhost:8000",
    JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  },
};

module.exports = nextConfig;
