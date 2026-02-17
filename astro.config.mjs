// @ts-check
import { defineConfig } from "astro/config";
import tailwindcssPlugin from "@tailwindcss/vite";
import vercelAdapter from "@astrojs/vercel/static";

// Cast a "callable" para que VSCode no se queje con @ts-check
/** @type {any} */ const tailwindcss = tailwindcssPlugin;
/** @type {any} */ const vercel = vercelAdapter;

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "static",
  adapter: vercel(),
});
