import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i-p.rmcdn.net',
        port: '',
        pathname: '/**', // Permite cualquier ruta dentro de ese dominio
      },
    ],
  },
};

export default nextConfig;
