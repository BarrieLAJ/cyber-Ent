import {ADD_ORDER, ADD_CUSTOMER, ADD_PAYMENT } from "./actions"
import axios from 'axios'



export const addPayment = (order,customer,payment) => dispatch => {
    axios
        .post('http://localhost:4000/api/cyberEnt/order', order)
        .then(res => {
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            })
            return res.data._id
        }).then((order_id)=> {
                axios
                .post('http://localhost:4000/api/cyberEnt/customer',customer)
                .then(resCus => {
                    dispatch({
                        type: ADD_CUSTOMER,
                        payload: resCus.data
                    })

                    return  resCus.data._id
                }).then((customer_id)=> {
                    let newPayment = {...payment, order_id, customer_id}
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

