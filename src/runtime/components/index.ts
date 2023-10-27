import {createResolver} from '@nuxt/kit'
const resolver = createResolver(import.meta.url)
const setupComponents = ()=>{
    return [
        {
            name: 'AppHeader',
            filePath: resolver.resolve('./AppHeader.vue'),
            global:true
        },
        {
            name: 'AppFooter',
            filePath: resolver.resolve('./AppFooter.vue'),
            global:true
        },
        {
            name: 'AppArticleCard',
            filePath: resolver.resolve('./AppArticleCard.vue'),
            global:true
        }
    ]
}
export default setupComponents
