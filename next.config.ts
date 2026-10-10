import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
