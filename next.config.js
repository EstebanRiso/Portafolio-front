/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ["localhost"],
    // next line is not required
    path: 'http://localhost:8080/images'
  }
};