import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  resolve: {
    alias: {
        "@": resolve(__dirname, "./src"),
        "@/hooks": resolve(__dirname, "./src/hooks"),
        "@/data": resolve(__dirname, "./src/data"),
    },
},
});
