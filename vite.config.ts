import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@my-public": path.resolve(__dirname, "./public"),
      "@my-component": path.resolve(__dirname, "./src/components"),
      "@my-library": path.resolve(__dirname, "./src/library"),
      "@my-page": path.resolve(__dirname, "./src/pages"),
      "@my-store": path.resolve(__dirname, "./src/store"),
    },
  },
  plugins: [react()],
});
