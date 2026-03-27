import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    // Esto le dice a Vite que no escanee estas rutas que causan conflicto
    exclude: ["swiper/vue", "swiper/svelte"],
  },
});
