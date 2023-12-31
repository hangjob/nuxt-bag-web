import {useNuxtApp, useState} from '#app'
import {watch} from "vue"

export const useFoo = () => {
    const isReady = useState(() => false)
    const nuxtApp = useNuxtApp()
    nuxtApp.hook("app:mounted", () => {
        if (!nuxtApp.$config.public.snipcart) {
            return;
        }
        watch(isReady, (newVal, oldVal) => {
            console.log(newVal, oldVal)
        })
    })
    return {
        isReady
    }
}
