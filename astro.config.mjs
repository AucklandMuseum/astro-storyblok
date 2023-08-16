import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import netlify from "@astrojs/netlify/functions";

import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  integrations: [storyblok({
    //accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'p3nWauZqXhuE8lNTLndLHgtt',
    apiOptions: {
      region: 'us'
    },
    components: {
      page: 'storyblok/contentTypes/Page',
      siteSection: 'storyblok/contentTypes/SiteSection',
      contentSection: 'storyblok/layout/ContentSection',
      copyBlock: 'storyblok/widgets/CopyBlock',
      hero: 'storyblok/widgets/Hero',
      htmlBlock: 'storyblok/widgets/HtmlBlock',
      linkImageButton: 'storyblok/widgets/HtmlBlock',
      menuItem: 'storyblok/widgets/MenuItem',
      titleBlock: 'storyblok/widgets/TitleBlock',
      youtubeVideo: 'storyblok/widgets/YoutubeVideo'
    }
  }),
  tailwind(), 
  partytown({
    // Adds dataLayer.push as a forwarding-event.
    config: {
      forward: ["dataLayer.push"],
      logCalls: true,
      logGetters: true,
      logSetters: true,
      logImageRequests: true,
      logMainAccess: true,
      logSendBeaconRequests: true,
      logStackTraces: false,
      logScriptExecution: true
    }
  }), 
  react(), 
  vue(), 
  compressor()],
  output: "server",
  vite: {
    server: {
      host: "localhost",
      port: 3000,
      cors: true,
      headers: {
        "X-Frame-Options": "ALLOW-FROM https://app.storyblok.com",
        "Content-Security-Policy": "frame-ancestors https://app.storyblok.com;"
      }
    }
  },
  adapter: netlify()
});