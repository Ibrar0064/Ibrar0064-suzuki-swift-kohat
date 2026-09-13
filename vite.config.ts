import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GitHub Pages is served from /<repo>/, Vercel from /
// Set GITHUB_PAGES=true in the GitHub Actions workflow to get the right base.
const isGhPages =
  process.env.GITHUB_PAGES === "true" || process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGhPages ? "/Ibrar0064-suzuki-swift-kohat/" : "/",
  plugins: [react(), tailwindcss(), viteSingleFile()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // singlefile inlines everything; keep chunk size warning high
    chunkSizeWarningLimit: 3000,
  },
});
