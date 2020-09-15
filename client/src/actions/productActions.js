import {GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from './actions'
import axios from 'axios'

export const getProducts = () => dispatch => {
    axios
        .get('http://localhost:4000/api/cyberEnt/product')
        .then(res => {

            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            })
        })
}


export const addProduct = (product) => dispatch => {
    axios
        .post('http://localhost:4000/api/cyberEnt/product', product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
        .catch(err=> console.log(err))
}

export const updateProduct = (_id, product) => dispatch => {
    dispatch({
        type: UPDATE_PRODUCT,
        payload: {product,_id}
    })
}

export const deleteProduct = (_id) => dispatch => {
    dispatch({
        type: DELETE_PRODUCT,
        payload: _id
    })
}