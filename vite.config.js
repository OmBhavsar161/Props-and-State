import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // other configuration options
  server: {
    port: 3000, // change this to a different port number
  },
  plugins: [react()],
});
