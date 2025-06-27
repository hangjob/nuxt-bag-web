export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig()
    return await event.$fetch(event.path, {
        baseURL: config.baseURL,
        method: event.method,
        headers: {
            ...(event.headers as HeadersInit),
            'Content-Type': 'application/json'
        },
        // 如果有 body 数据
        body: getMethod(event) !== 'GET' ? await readBody(event) : undefined,
        // 超时设置
        timeout: 15000
    });
})
