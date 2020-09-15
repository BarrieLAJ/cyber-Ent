import {GET_PRODUCTS, ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT} from '../actions/actions'


const initstate = {
    products: []
}


export default (state = initstate, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return{
                ...state,
                products: action.payload
            }
        case ADD_PRODUCT:
            return {
                ...state,
                products: [action.payload, ...state.products]
            }
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter((product) => product._id !== action.payload)
            }
            
    
        default:
            return state
    }
}