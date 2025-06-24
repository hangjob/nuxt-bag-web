// composables/useFetch.ts
import type { NitroFetchRequest } from 'nitropack'
import type { FetchOptions } from 'ofetch'
import type { UseFetchOptions } from "#app"; // 确保导入正确的类型

// 定义基础响应类型
interface BaseResponse<T> {
    code: number
    data: T
    message: string
}


// 创建兼容的选项类型
type CompatibleOptions<T> = Omit<UseFetchOptions<T>, "method" | "onResponse"> & {
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "HEAD" | "OPTIONS";
    onResponse?: (ctx: { response: Response }) => Promise<void> | void;
};

// 自定义请求配置
interface CustomFetchOptions<R extends NitroFetchRequest> extends FetchOptions {
    request?: R
    auth?: boolean // 是否需要认证
}

export const useApi = <T = any, R extends NitroFetchRequest = string>(
    url: R,
    options: CustomFetchOptions<R> = {}
) => {
    // 获取运行时配置
    const config = useRuntimeConfig()
    const token = useCookie('token') // 从cookie获取token

    // 合并默认配置
    const defaults: FetchOptions = {
        baseURL: config.public.apiBase,
        headers: {
            'Content-Type': 'application/json',
            ...(token.value && options.auth !== false ? { Authorization: `Bearer ${token.value}` } : {})
        },
        onRequest({ options }) {
            options.query = { ...options.query, t: Date.now() }
        },
        onResponse({ response }) {

        },
        onResponseError({ response }) {
            // 响应拦截器 - 错误
            console.error(`[响应错误] ${url}`, response.statusText)
            // 统一错误处理
            const status = response.status
            if (status === 401) {
                navigateTo('/login') // 跳转到登录页
            }
        }
    }

    return useFetch<BaseResponse<T>, Error>(
        url,
        {
            ...defaults,
            ...options,
            method: (options?.method || defaults?.method) as
                | "GET"
                | "POST"
                | "PUT"
                | "DELETE"
                | "PATCH"
                | "HEAD"
                | "OPTIONS"
                | undefined,
        } as CompatibleOptions<BaseResponse<T>>
    );
}
