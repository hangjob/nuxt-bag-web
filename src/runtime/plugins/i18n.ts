import {defineNuxtPlugin, useRequestHeaders, useRuntimeConfig} from '#app'
import {createI18n} from 'vue-i18n'
import {defu} from 'defu'

export default defineNuxtPlugin(({vueApp}) => {
    const runtimeConfig = useRuntimeConfig().public
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'cn',
        messages: defu({
            en: {
                hello: 'Hello, {name}!'
            },
            cn: {
                hello: 'ces, {name}!'
            },
        }, runtimeConfig.i18n.messages)
    })
    // @ts-ignore
    vueApp.use(i18n)
})
