export type ApiHttpRequest = {
    url: string
    method: ApiHttpMethod
    body?: any
    headers?: any
  }
  
  export interface ApiHttpClient<R = any> {
    request: (data: ApiHttpRequest) => Promise<ApiHttpResponse<R>>
  }
  
  export type ApiHttpMethod = 'post' | 'get' | 'put' | 'delete'
  
  export enum ApiHttpStatusCode {
    ok = 200,
    noContent = 204,
    badRequest = 400,
    unauthorized = 401,
    forbidden = 403,
    notFound = 404,
    serverError = 500
  }
  
  export type ApiHttpResponse<T = any> = {
   
  }