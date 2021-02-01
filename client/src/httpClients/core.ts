import { AxiosRequestConfig } from "axios";

export type PrimitiveType = undefined | boolean | number | string 

export type HttpHeaderName = "Content-Type" | "Content-Length"

export interface QueryParams {
    [key: string] : PrimitiveType | Array<PrimitiveType>
}

export interface HttpHeaders {
    [key: string] : PrimitiveType
}

export interface Request<T> {
    key?: string,
    url: string
    body?: T
    headers?: PrimitiveType
    params?: {[key: string] : QueryParams}
}

export interface Response<T> {
    key?: string,
    data: T
    status: number
    statusText: string
    headers: string | object
}

export interface HttpClient {

    get<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>>
    post<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>>
    patch<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>>
    delete<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>>
}