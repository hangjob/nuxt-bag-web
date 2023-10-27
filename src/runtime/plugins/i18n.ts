import {defineNuxtPlugin,useRequestHeaders} from '#app'
import { createI18n } from 'vue-i18n'

export default defineNuxtPlugin(({ vueApp }) => {
    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: 'cn',
        messages: {
            en: {
                hello: 'Hello, {name}!'
            },
            cn:{
                hello: 'ces, {name}!'
            }
        }
    })

    vueApp.use(i18n)
})
