import { Order } from "../orderinterface"



//orders Action
export const GET_ORDERS = 'GET_ORDERS'
export const ADD_ORDER = 'ADD_ORDER'
export const DELETE_ORDER = 'DELETE_ORDER'
export const UPDATE_ORDER = 'UPDATE_ORDER'



interface Update {
    _id: Order['_id']
    order: Order
}

interface GetOrdersInterface {
    type: typeof GET_ORDERS
    payload: Order[]
}

interface AddOrderInterface {
    type: typeof ADD_ORDER
    payload: Order
}

interface UpdateOrderInterface {
    type: typeof UPDATE_ORDER
    payload: Update
}


interface DeleteOrderInterface {
    type: typeof DELETE_ORDER
    payload: Order['_id']
}



export type OrderActionType = GetOrdersInterface | AddOrderInterface | UpdateOrderInterface | DeleteOrderInterface