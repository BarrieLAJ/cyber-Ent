import {Payment} from '../paymentInterface'

// payment Actions
export const GET_PAYMENTS = 'GET_PAYMENTS'
export const ADD_PAYMENT = 'ADD_PAYMENT'
export const DELETE_PAYMENT = 'DELETE_PAYMENT'
export const UPDATE_PAYMENT = 'UPDATE_PAYMENT'


interface Update {
    _id: Payment['_id'];
    payload: Payment
}

interface GetPaymentInterface {
    type: typeof GET_PAYMENTS
    payload: Payment[]
}

interface AddPaymentInterface {
    type: typeof ADD_PAYMENT
    payload: Payment
}

interface UpdatePaymentInterface {
    type: typeof UPDATE_PAYMENT
    payload: Update
}

interface DeletePaymentinterface {
    type: typeof DELETE_PAYMENT
    payload: Payment['_id']
}



export type PaymentActionType = GetPaymentInterface | AddPaymentInterface | UpdatePaymentInterface | DeletePaymentinterface
