import { defineConfig } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [alpinejs()],
});