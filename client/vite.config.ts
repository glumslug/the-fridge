import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const link =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:3000/"
    : "http://18.218.156.81:3000/";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/db": {
        target: link,

        changeOrigin: true,
        secure: false,
      },
    },
    host: true,
  },
  plugins: [react()],
});
