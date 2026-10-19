import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    qualities: [75, 90],
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
