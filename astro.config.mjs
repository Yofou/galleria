import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte"
import node from "@astrojs/node"

const Tailwind = tailwind({
  config: {
    "applyAstroPreset": false,
  }
})

// https://astro.build/config
export default defineConfig({
  integrations: [Tailwind, svelte()],
  adapter: node()
});
