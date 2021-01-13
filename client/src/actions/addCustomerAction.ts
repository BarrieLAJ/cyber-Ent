import {ADD_ORDER, ADD_CUSTOMER, ADD_PAYMENT } from "./actions"
import axios from 'axios'



export const addPayment = (order,customer,payment) => dispatch => {
    axios
        .post('http://localhost:4000/api/cyberEnt/customer', customer)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER,
                payload: res.data
            })
            return res.data._id
        }).then((customer_id)=> {
                let newOrder = {...order, customer: customer_id}
                axios
                .post('http://localhost:4000/api/cyberEnt/order',newOrder)
                .then(res => {
                    dispatch({
                        type: ADD_ORDER,
                        payload: res.data
                    })

                    return  res.data._id
                }).then((order_id)=> {
                    let newPayment = {...payment, order: order_id, customer: customer_id}
                    axios
                        .post('http://localhost:4000/api/cyberEnt/payment', newPayment)
                        .then(res => {
                            dispatch({
                                type: ADD_PAYMENT,
                                payload: res.data
                            })
                        })
                })
                })
}

