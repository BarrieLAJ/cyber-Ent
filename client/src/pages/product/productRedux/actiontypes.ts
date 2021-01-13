import {Product} from '../productInterface'

//PRODUCTs Actions
export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT'

interface Update {
    _id: Product['_id'];
    product: Product
}

interface GetProductInterface {
    type: typeof GET_PRODUCTS;
    payload: Product[]
}

interface AddProductInterface {
    type: typeof ADD_PRODUCT;
    payload: Product
}

interface DeleteProductInterface {
    type: typeof DELETE_PRODUCT;
    payload: Product['_id']
}

interface UpdateProductInterface {
    type: typeof UPDATE_PRODUCT;
    payload: Update
}

export type ProductActionType = GetProductInterface | AddProductInterface | DeleteProductInterface | UpdateProductInterface