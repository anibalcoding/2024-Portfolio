/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Enable static exports for deployment
  output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
