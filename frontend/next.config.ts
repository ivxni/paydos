import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  sassOptions: {
    // Modern Sass API (Next 16 / sass-loader v16): resolve bare `@use "mixins"`
    // imports from src/styles in any .module.scss.
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
