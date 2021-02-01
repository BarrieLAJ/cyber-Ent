import axios from 'axios'
import { addOrder } from "../pages/order/orderRedux/orderSlice"
import { Order } from "../pages/order/orderinterface"
import { Customer } from "../pages/customer/customerinterface"
import { Payment } from "../pages/payment/paymentInterface"
import { addtheCustomer } from "../pages/customer/customerRedux/customerSlice"
import { addthePayment } from "../pages/payment/paymentRedux/paymentSlice"
import { AppStoreInterFace } from "../store/store"
import { ThunkAction } from "redux-thunk"
import { Action } from "redux"
import HttpC from '../httpClients'



export const addPayment = (order: Order,customer: Customer, payment: Payment): ThunkAction<
void,
AppStoreInterFace,
unknown,
Action<string>> => dispatch => {
    HttpC
        .post({url: '/customer', data: customer})
        .then(res => {
            dispatch({
                type: addtheCustomer.type,
                payload: res.data
            })
            return res.data._id
        }).then((customer_id)=> {
                let newOrder = {...order, customer: customer_id}
                HttpC
                .post({url: '/order', data: newOrder})
                .then(res => {
                    dispatch({
                        type: addOrder.type,
                        payload: res.data
                    })

                    return  res.data._id
                }).then((order_id)=> {
                    let newPayment = {...payment, order: order_id, customer: customer_id}
                    HttpC
                        .post({url: '/payment', data: newPayment})
                        .then(res => {
                            dispatch({
                                type: addthePayment.type,
                                payload: res.data
                            })
                        })
                })
                }).catch(err => console.log(err))
}

