import {useFetch} from '#app'

const baseURL: string = "http://127.0.0.1:7001";  //全局后台服务器请求地址

//定义ts变量类型接口
interface HttpParms {
    baseURL?: string,  //请求的基本URL，即后台服务器地址，（若服务器请求地址只有一个，可不填）
    url: string,      //请求api接口地址
    method?: any,   //请求方法
    query?: any,       //添加查询搜索参数到URL
    body?: any         //请求体
}

/**
 * 网络请求方法
 * @returns 响应结果
 * @param params
 */
export const useHttp = (params: HttpParms) => {
    return new Promise<void>((resolve, reject) => {
        useFetch(
            (params.baseURL ?? baseURL) + params.url,
            {
                method: params.method ?? "POST",
                query: params?.query ?? null,
                body: params?.body ?? null,
                onRequest({request, options}) {
                    // 设置请求头
                    options.headers = options.headers || {}
                },
                onRequestError({request, options, error}) {
                    // 处理请求错误
                    reject(error)
                },
                onResponse({request, response, options}) {
                    // 处理响应数据
                    if(response._data.code === 1){
                        resolve(response._data.data)
                    }else{
                        reject(response._data)
                    }
                },
                onResponseError({request, response, options}) {
                    // 处理响应错误
                    reject(response._data)
                },
            },
        )
    });
}

