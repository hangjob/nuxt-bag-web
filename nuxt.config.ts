// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    modules: [
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        '@nuxt/test-utils',
        '@nuxt/ui',
        '@nuxtjs/sitemap',
        [
            '@pinia/nuxt',
            {
                autoImports: [
                    'defineStore',
                ],
            }
        ],
        'pinia-plugin-persistedstate/nuxt',
        '@formkit/auto-animate/nuxt',
        '@nuxtjs/i18n',
    ],
    i18n: {
        defaultLocale: 'zh',
        locales: [
            {code: 'en', name: 'English', file: 'en.json'},
            {code: 'zh', name: 'Chinese', file: 'zh.json'}
        ],
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            redirectOn: 'root',
            alwaysRedirect: true, // 每次访问保存
            cookieCrossOrigin: true
        }
    },
    css: [
        '~/assets/css/main.css'
    ],
    app: {
        head: {
            title: 'nuxt-bag-web',
            htmlAttrs: {
                lang: 'zh',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            ],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
        }
    },
    runtimeConfig: {
        baseURL: "http://localhost:1337" // 请求接口地址
    },
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/sitemap_index.xml']
        }
    },
    site: {
        url: 'http://localhost:3000/',
        name: 'My Awesome Website',
    },
    sitemap: {
        autoLastmod: true, // 自动添加最后修改时间
        sitemaps: true, // 启用自动分块 每个 sitemap.xml 包含 50000 条 URL
        cacheMaxAgeSeconds: 3600 // 缓存时间 1 小时
    },
})
