import {GET_PAYMENTS, ADD_PAYMENT, DELETE_PAYMENT, UPDATE_PAYMENT} from '../actions/actions'
import axios from 'axios'


export const getPayments = () => dispatch => {
    axios
        .get('http://localhost:4000/api/cyberEnt/payments')
        .then(res => {
            dispatch({
                type: GET_PAYMENTS,
                payload: res.data
            })
        })
}


export const addPayment = (payment) => dispatch => {
    axios
        .post('http://localhost:4000/api/cyberEnt/payment', payment)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            })
        })
}

export const updatePayment = (_id, payment) => dispatch => {
    dispatch({
        type: UPDATE_PAYMENT,
        payload: {payment,_id}
    })
}

export const deletePayment = (_id) => dispatch => {
    dispatch({
        type: DELETE_PAYMENT,
        payload: _id
    })
}