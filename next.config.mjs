/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true, // 禁用Next.js圖片優化，以支持靜態導出
    // 新增 loader 設定
    loader: 'akamai',
    path: '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/zhfz2024' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/zhfz2024/' : '',
  // 添加壓縮設置
  compress: true,
  // 確保 Webpack 進行代碼分割
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
    };
    return config;
  },
};

export default nextConfig;
