import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import dotenv from "dotenv";
import path from "path";
import { defineConfig } from "vitest/config";

dotenv.config();

// https://vite.dev/config/
export default defineConfig({
  define: {
    API_URL: JSON.stringify(process.env.API_URL),
    JWT_SECRET: JSON.stringify(process.env.JWT_SECRET),
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.{test,spec}.{js,ts,jsx,tsx}"],
  },
});
