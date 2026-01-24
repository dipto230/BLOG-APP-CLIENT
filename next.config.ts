import "./src/env";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "example.com",
       "images.unsplash.com",
    ],
  },
};

export default nextConfig;
