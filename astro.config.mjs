import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), partytown(), react(), vue(), compressor()],
  output: "server",
  adapter: netlify()
});