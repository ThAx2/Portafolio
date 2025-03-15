import { defineConfig } from "$fresh/server.ts";

export default defineConfig({
  plugins: [
    {
      name: "tailwind",
      entrypoint: "https://esm.sh/twind/shim",
    },
  ],
});
