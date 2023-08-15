import { defineConfig } from 'astro/config'
import storyblok from '@storyblok/astro'
import { loadEnv } from 'vite'
import tailwind from '@astrojs/tailwind'
const env = loadEnv('', process.cwd(), 'STORYBLOK')

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    storyblok({
      //accessToken: env.STORYBLOK_TOKEN,
      accessToken: 'p3nWauZqXhuE8lNTLndLHgtt',
      apiOptions: {
        region: 'us',
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
        youtubeVideo: 'storyblok/widgets/YoutubeVideo',
      },
    }),
    tailwind(),
  ],
  vite: {
  },
})
