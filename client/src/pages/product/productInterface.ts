export default interface Product {
    status?: string
    _id?:string
    name:string
    type:string
    unit_cost:number
    size: string
    created_at?: Date
    updated_at?: Date
    __v?: number
}


export interface ProductReducerInterface {
    products: Product[]
    loading: boolean
    error: boolean
}