// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  
  // SEO and Meta
  app: {
    head: {
      title: 'Content Creator\'s Workshop - Demo Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'デモ用フリーランスライターポートフォリオサイト - 架空のサイトです' },
        { name: 'robots', content: 'noindex, nofollow, noarchive, nosnippet' },
        { property: 'og:title', content: 'Content Creator\'s Workshop - Demo Portfolio' },
        { property: 'og:description', content: 'デモ用フリーランスライターポートフォリオサイト' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
    // ページ遷移設定を追加
    pageTransition: { 
      name: 'fade', 
      mode: 'out-in' 
    }
  },

  // スクロール動作の制御を追加
  router: {
    options: {
      scrollBehavior(to, from, savedPosition) {
        // 瞬間的にトップに移動（アニメーションなし）
        return { top: 0, behavior: 'auto' }
      }
    }
  },

  // Content configuration
  content: {
    highlight: {
      theme: 'github-light'
    }
  },

  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'Noto+Sans+JP': [400, 500, 600, 700],
      Poppins: [500, 600]
    }
  },

  // Tailwind CSS
  tailwindcss: {
    cssPath: '~/assets/css/main.css'
  },

  // Build configuration
  nitro: {
    prerender: {
      ignore: ['/sitemap.xml']
    }
  },

  // Runtime config
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://content-creators-workshop-demo.vercel.app'
    }
  }
})
