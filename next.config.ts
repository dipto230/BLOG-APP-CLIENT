import "./src/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "example.com", // 👈 add this
    ],
  },
};

export default nextConfig;
