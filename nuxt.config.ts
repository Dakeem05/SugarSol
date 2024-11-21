// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  components: {
    global: true,
    dirs: ['~/components']
  },
  app: {
    head: {
      title: 'SugarDog - The Sweetest Memecoin on Solana',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Join the sweetest community on Solana with SugarDog - the memecoin that brings joy to DeFi.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://sugardog.vercel.app' },
        { property: 'og:title', content: 'SugarDog - The Sweetest Memecoin on Solana' },
        { 
          property: 'og:description', 
          content: 'Join the sweetest community on Solana with SugarDog - the memecoin that brings joy to DeFi.'
        },
        {
          property: 'og:image',
          content: '/assets/images/dog.jpg'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})
