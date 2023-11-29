import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import vue from "@astrojs/vue";
import { loadEnv } from "vite";
import node from "@astrojs/node";
import netlify from "@astrojs/netlify/functions";

import compressor from "astro-compressor";
const env = loadEnv(process.env.NODE_ENV, process.cwd(), "STORYBLOK");

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000,
    host: true
  },
  image: {
    remotePatterns: [{ protocol: "https" }],
  },
  //base: 'auckland-museum',
  trailingSlash: 'never',
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
    apiOptions: {
      region: 'us'
    },
    components: {
      //Page Types
      amPage: 'components/storyblok/contentTypes/Page',
      amSiteSection: 'components/storyblok/contentTypes/SiteSection',
      //Widgets
      amContentSection: 'components/storyblok/layout/ContentSection',
      amCopyBlock: 'components/storyblok/widgets/CopyBlock',
      amHero: 'components/storyblok/widgets/Hero',
      amHtmlBlock: 'components/storyblok/widgets/HtmlBlock',
      amImage: 'components/storyblok/widgets/Image',
      amLinkImageButton: 'components/storyblok/widgets/HtmlBlock',
      amMenuItem: 'components/storyblok/widgets/MenuItem',
      amTitleBlock: 'components/storyblok/widgets/TitleBlock',
      amYoutubeVideo: 'components/storyblok/widgets/YoutubeVideo',
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
  output: env.STORYBLOK_IS_PREVIEW === 'yes' ? 'server' : 'static',
  ...(env.STORYBLOK_ENV === 'development' && {
  vite: {
    server: {
      host: "localhost",
      port: 3000,
      cors: true,
      headers: {
        "X-Frame-Options": "ALLOW-FROM https://app.storyblok.com",
        "Content-Security-Policy": "frame-ancestors https://app.storyblok.com;"
        },
      }
    }
  }),
  ...(env.STORYBLOK_ENV === 'development' && {
    adapter: node({
      mode: "standalone"
    })
  }),
  ...(env.STORYBLOK_ENV === 'production' && {
    adapter: netlify({
    
    })
  }),
});