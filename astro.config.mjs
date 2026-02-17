// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://luangasociadossac.vercel.app",
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssCodeSplit: true,
      minify: "esbuild",
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['astro:assets']
          }
        }
      }
    }
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    domains: [],
    remotePatterns: []
  },

  build: {
    inlineStylesheets: 'auto',
    assets: '_assets'
  },

  compressHTML: true,
  
  integrations: [
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true
    })
  ]
});