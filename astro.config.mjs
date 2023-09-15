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
  server: { port: 3000, host: true},
  //base: 'auckland-museum',
  redirects:{
    "/[...slug]": "/auckland-museum/[...slug]"
  },
  trailingSlash: 'never',
  integrations: [storyblok({
    //accessToken: env.STORYBLOK_TOKEN,
    accessToken: 'p3nWauZqXhuE8lNTLndLHgtt',
    apiOptions: {
      region: 'us'
    },
    components: {
      page: 'components/storyblok/contentTypes/Page',
      siteSection: 'components/storyblok/contentTypes/SiteSection',
      contentSection: 'components/storyblok/layout/ContentSection',
      copyBlock: 'components/storyblok/widgets/CopyBlock',
      hero: 'components/storyblok/widgets/Hero',
      htmlBlock: 'components/storyblok/widgets/HtmlBlock',
      image: 'components/storyblok/widgets/Image',
      linkImageButton: 'components/storyblok/widgets/HtmlBlock',
      menuItem: 'components/storyblok/widgets/MenuItem',
      titleBlock: 'components/storyblok/widgets/TitleBlock',
      youtubeVideo: 'components/storyblok/widgets/YoutubeVideo',
      screenLayout: 'components/storyblok/contentTypes/DigitalSignage/ScreenLayout',
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