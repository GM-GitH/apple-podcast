import { defineConfig } from "vite"
import { compression } from "vite-plugin-compression2"
import react from "@vitejs/plugin-react-swc"
import path from "path"

export default defineConfig({
  base: "/apple-podcast",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/")
    }
  },
  optimizeDeps: {
    include: ["@reduxjs/toolkit/query/react"],
    force: true
  },
  plugins: [react(), compression()]
})
