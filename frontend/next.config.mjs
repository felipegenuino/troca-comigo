/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Todas as chamadas para /api
        destination: "http://backend:3000/:path*", // Redireciona para o servidor Rails
      },
    ];
  },
};

export default nextConfig;
