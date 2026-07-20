import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://roshini-a11.github.io",
  base: "/roshini-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});