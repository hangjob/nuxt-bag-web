import {createResolver} from '@nuxt/kit'
const resolver = createResolver(import.meta.url)
const setupLayout = ()=>{
    return [
        {
            name: 'default',
            src: resolver.resolve('./default.vue')
        },
        {
            name: 'desktopBase',
            src: resolver.resolve('./desktopBase.vue')
        }
    ]
}
export default setupLayout
