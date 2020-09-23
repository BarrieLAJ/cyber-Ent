import { UPDATE_CUSTOMER, DELETE_CUSTOMER, ADD_CUSTOMER, GET_CUSTOMERS } from "./actions"
import axios from 'axios'



export const getCustomers = () => dispatch => {
    axios
        .get('http://localhost:4000/api/cyberEnt/customers')
        .then(res => {
            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data
            })
        })
}


export const addCustomer = (customer) => dispatch => {
    axios
        .post('http://localhost:4000/api/cyberEnt/customer',customer)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER,
                payload: res.data
            })
        })
}

export const updateCustomer = (_id, customer) => dispatch => {
    dispatch({
        type: UPDATE_CUSTOMER,
        payload: {customer,_id}
    }) 
}

export const deleteCustomers = (_id) => dispatch => {
   dispatch({
    type: DELETE_CUSTOMER,
    payload: _id
})
}