import {GET_ORDERS, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER} from '../actions/actions'


const initstate = {
    orders: []
}


export default (state = initstate, action) => {
    switch (action.type) {
        case GET_ORDERS:
            return{
                ...state,
                orders: action.payload
            }
        case ADD_ORDER:
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        case DELETE_ORDER:
            return {
                ...state,
                orders: state.orders.filter(({_id})=> _id !== action.payload)
            }
            
    
        default:
            return state
    }
}