import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/:locale/articles",
        destination: "/:locale/category/all",
        permanent: false,
      },
      {
        source: "/:locale/category",
        destination: "/:locale/category/all",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
