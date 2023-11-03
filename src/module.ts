import {
    defineNuxtModule,
    createResolver,
    addComponent,
    addImportsDir,
    installModule,
    addPlugin,
    addLayout,
    extendPages,
    extendRouteRules
} from '@nuxt/kit'
import {defu} from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {
    name: string,
    sitemap: {
        url?: string
    },
    pinia: Array<any>,
    i18n: {
        messages: {}
    },
    seoMeta: any
}



export default defineNuxtModule<ModuleOptions>({
    meta: {
        name: 'nuxt-bag-web',
        configKey: 'bagWeb' // 使用时根据这个key传递参数
    },
    defaults: {
        name: '123', // 默认参数
        sitemap: {
            url: 'http://localhost:3000'
        },
        pinia: [],
        i18n: {
            messages: {}
        },
        seoMeta: {
            title: 'bag',
            ogTitle: '',
            description: '',
            ogDescription: '',
            ogImage: 'https://example.com/image.png',
            twitterCard: 'bag-image',
        }
    },
    async setup(options, nuxt) {
        const resolver = createResolver(import.meta.url)
        console.log('配置参数', options.name)

        // 合并配置
        nuxt.options.runtimeConfig.public = defu(nuxt.options.runtimeConfig.public, options)


        // 添加复合函数
        addImportsDir(resolver.resolve('runtime/composables'))

        // 添加时间处理插件
        await installModule("dayjs-nuxt", {
            locales: ['en', 'zh-cn'],
            plugins: ['relativeTime', 'utc', 'timezone'],
            defaultLocale: 'zh-cn',
        })

        // 添加UI库-https://ui.nuxt.com/getting-started/installation
        await installModule('@nuxt/ui')

        // 添加状态管理
        await installModule('@pinia/nuxt', {
            storesDirs: [resolver.resolve('runtime/stores/**'), ...options.pinia],
            autoImports: ['defineStore', 'acceptHMRUpdate'],
        })

        // 生成sitemap.xml文件 - https://nuxtseo.com/sitemap/guides/multi-sitemaps
        await installModule("nuxt-simple-sitemap", {
            url: options.sitemap.url,
            autoI18n: true,
            sitemaps: true,
            dynamicUrlsApiEndpoint: '/__sitemap',
        })

        // 图片优化- https://image.nuxt.com/usage/nuxt-img
        await installModule("@nuxt/image", {
            quality: 80,
            format: ['webp', 'avif', 'jpeg', 'jpg', 'png', 'gif'],
        })

        // https://www.tailwindcss.cn/docs/object-fit
        nuxt.hook('components:dirs', async (dirs) => {
            dirs.push({
                path: resolver.resolve('runtime/components'),
                prefix: 'bag'
            })
        })

        await installModule('@nuxtjs/tailwindcss')

        // 注入静态资源
        nuxt.options.css.push(resolver.resolve('./runtime/assets/reset.less'))

        // 多语言插件
        await addPlugin(resolver.resolve('runtime/plugins/i18n'))
    }
})
