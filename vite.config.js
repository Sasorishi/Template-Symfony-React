import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import path from "path";

/* if you're using React */
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    /* react(), // if you're using React */
    react(),
    symfonyPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "assets/js"),
    },
  },
  server: {
    hmr: false,
  },
  build: {
    rollupOptions: {
      input: {
        app: "./assets/app.jsx",
      },
    },
  },
});
