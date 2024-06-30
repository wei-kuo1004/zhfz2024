/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 禁用Next.js图片优化，以支持静态导出
  },
  basePath: '/zhfz2024',
  assetPrefix: '/zhfz2024/',
};

export default nextConfig;