import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://pardus.wine",
  image: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: "auto",
  },
});
