export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    const method = getMethod(event)
    const body = method !== 'GET' ? await readBody(event) : undefined
    try {
        return await $fetch(event.path, {
            baseURL: config.baseURL,
            method,
            headers: {
                ...(event.headers as HeadersInit),
                'Content-Type': 'application/json'
            },
            body: body?.data || body,
            timeout: 15000
        })
    } catch (e: any) {
        console.error("[Proxy Error]", e)
    }
})
