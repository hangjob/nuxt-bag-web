// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// @ts-ignore

import AutoImport from 'unplugin-auto-import/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

console.log(Components)
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: false},
    css: [
        '~/assets/css/main.css',
        '~/assets/css/style.css',
        '~/assets/css/tailwind.css',
    ],
    modules: [
        '@nuxt/fonts',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/scripts',
        // '@nuxt/ui',
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
        // '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        'nuxtjs-naive-ui'
    ],
    vite: {
        plugins: [
            AutoImport({
                imports: [
                    {
                        'naive-ui': [
                            'useDialog',
                            'useMessage',
                            'useNotification',
                            'useLoadingBar'
                        ]
                    }
                ]
            }),
            Components({
                resolvers: [NaiveUiResolver()]
            })
        ]
    },
    // i18n: {
    //     defaultLocale: 'zh',
    //     locales: [
    //         {code: 'en', name: 'English', file: 'en.json'},
    //         {code: 'zh', name: 'Chinese', file: 'zh.json'}
    //     ],
    //     detectBrowserLanguage: {
    //         useCookie: true,
    //         cookieKey: 'i18n_redirected',
    //         redirectOn: 'root',
    //         alwaysRedirect: true, // 每次访问保存
    //         cookieCrossOrigin: true
    //     },
    //     // 添加以下配置关闭有问题的功能
    //     bundle: {
    //         optimizeTranslationDirective: false // 明确禁用该功能
    //     }
    // },
    app: {
        head: {
            title: 'nuxt-bag-web',
            htmlAttrs: {
                lang: 'zh',
            },
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                {rel: "stylesheet", href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css'}
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
