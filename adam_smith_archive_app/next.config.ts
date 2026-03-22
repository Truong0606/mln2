import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  outputFileTracingRoot: path.join(__dirname, ".."),
  outputFileTracingIncludes: {
    "/*": [
      "../Knowledge_Neurons/**/*",
      "../Project_Archives/Archives_VN/Adam_Smith_Archives_VN/**/*",
      "./content/**/*",
      "./public/**/*",
    ],
  },
};

export default nextConfig;
