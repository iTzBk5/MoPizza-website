import path from "path"; // Ensure path is imported
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/MoPizza-website/", // Replace with your actual GitHub repository name
});
