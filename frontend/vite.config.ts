import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@src", replacement: "/src" }],
  },
  server: { port: 8000 },
  preview: { port: 8000 },
});
