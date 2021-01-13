import { Customer } from "../customer/customerinterface";
import { Product } from "../product/productInterface";

export interface Order  {

        _id?: string,
        total_cost: number,
        quantity: number,
        product?: Product | string,
        customer?: Customer | string,
        status?: string

}


export interface OrderReducerinterface {
    orders: Order[]
    error: boolean
    loading: boolean
}