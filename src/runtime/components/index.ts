import {createResolver} from '@nuxt/kit'
const resolver = createResolver(import.meta.url)
const setupComponents = ()=>{
    return [
        {
            name: 'AppHeader',
            filePath: resolver.resolve('./AppHeader.vue')
        },
        {
            name: 'AppFooter',
            filePath: resolver.resolve('./AppFooter.vue')
        }
    ]
}
export default setupComponents
