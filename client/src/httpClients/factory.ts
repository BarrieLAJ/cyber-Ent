import { HttpClient } from "./core";
import AxiosClient from "./impl";

export const createInstance = (baseURL: string) : HttpClient => {
   return new AxiosClient(baseURL)
}


let client: HttpClient;

export const getInstance = (baseURL: string):HttpClient =>{
    if(!client){
        client = createInstance(baseURL)
    }
    return client
}