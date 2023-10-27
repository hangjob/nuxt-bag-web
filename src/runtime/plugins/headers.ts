import {defineNuxtPlugin, addRouteMiddleware, defineNuxtRouteMiddleware, navigateTo, useSeoMeta,useRuntimeConfig} from '#app'

export default defineNuxtPlugin((vueApp) => {
    const config = useRuntimeConfig()
    useSeoMeta({
        // @ts-ignore
        ...config.seoMeta
    })
})
