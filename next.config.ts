import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages serves static files only. `next build` emits the site to `out/`.
  output: "export",
  // Empty for a user site (<user>.github.io); "/<repo>" for a project site.
  // The value is supplied by actions/configure-pages in CI.
  basePath: process.env.PAGES_BASE_PATH || undefined,
  // `cacheComponents`/`partialPrefetching` enable PPR, which Next.js rejects
  // in export mode ("Invariant: PPR cannot be enabled in export mode").
  // This site has no cached or dynamic server data, so they are not needed.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
