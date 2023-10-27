import {createResolver} from '@nuxt/kit'

const resolver = createResolver(import.meta.url)
const setupPages = () => {
    return [
        {
            name: 'login',
            path: '/login',
            file: resolver.resolve('./login/index.vue')
        },
    ]
}
export default setupPages
