//customer Action
import {Customer} from '../customerinterface'


export const GET_CUSTOMERS = 'GET_CUSTOMERS'
export const ADD_CUSTOMER = 'ADD_CUSTOMER'
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
export const UPDATE_CUSTOMER = 'UPDATE_CUSTOMER'

interface Update {
    _id: Customer['_id'];
    customer: Customer
}

interface GetCustomerInterface {
    type: typeof GET_CUSTOMERS;
    payload: Customer[];
}


interface AddCustomerInterface {
    type: typeof ADD_CUSTOMER;
    payload: Customer;
}


interface DeleteCustomerInterface {
    type: typeof DELETE_CUSTOMER;
    payload: Customer["_id"];
}

interface UpdateCustomerInterface {
    type: typeof UPDATE_CUSTOMER;
    payload: Update;
}


export type CustomerActionType = GetCustomerInterface | AddCustomerInterface | DeleteCustomerInterface | UpdateCustomerInterface

