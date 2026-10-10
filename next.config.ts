import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Endereços antigos com acento e o bairro que na verdade era um município
      { source: "/cidade/curitiba/ah%C3%BA", destination: "/cidade/curitiba/ahu", permanent: true },
      { source: "/cidade/curitiba/merc%C3%AAs", destination: "/cidade/curitiba/merces", permanent: true },
      { source: "/cidade/curitiba/abatia", destination: "/cidade/abatia", permanent: true },
      // "Cristal" não é um bairro de Curitiba
      { source: "/cidade/curitiba/cristal", destination: "/cidade/curitiba", permanent: true },
    ]
  },
};

export default nextConfig;
