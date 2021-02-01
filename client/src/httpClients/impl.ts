import axios, { AxiosInstance, Method } from "axios";
import { HttpClient, Request, Response } from "./core";

class AxiosClient implements HttpClient {
    private axiosInstance: AxiosInstance;

    constructor(baseUrl: any, headers?: any){
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {"Content-Type": "application/json; charset=utf-8"}

        
        })
    }
    get<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("GET", req)
    }

    post<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("POST", req)
    }
    patch<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("PATCH", req)
    }
    delete<ReqBody extends unknown, RespBody extends unknown>(req: Request<ReqBody>): Promise<Response<RespBody>> {
        return this.makeRequest("DELETE", req)
    }

    private makeRequest<ReqBody extends unknown, ResBody extends unknown>(method: Method, request: Request<ReqBody>): Promise<Response<ResBody>> {
        let {params, body, ...rest } = request
        const queryParams = Object.entries(params || {})
         .reduce((acc, [key, values]) =>{
            let valStr: string;
            if (typeof values === 'object' && Array.isArray(values)) {
                valStr = values.join(",")
            } else {
                valStr = values?.toString()
            }
            return {...acc, [key]: valStr}
        }, {});
        return this.axiosInstance.request({method, ...rest, params: queryParams, data: body}).then((res)=>{
            return res.data;
        }).catch(err => err)
    }
    
}

export default AxiosClient

