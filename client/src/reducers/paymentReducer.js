import {GET_PAYMENTS, ADD_PAYMENT, DELETE_PAYMENT, UPDATE_PAYMENT} from '../actions/actions'


const initstate = {
    payments: []
}


export default (state = initstate, action) => {
    switch (action.type) {
        case GET_PAYMENTS:
            return{
                ...state,
                payments: action.payload
            }
        case ADD_PAYMENT:
            return {
                ...state,
                payments: [...state.payments, action.payload]
            }
        case DELETE_PAYMENT:
            return {
                ...state,
                payments: [...state.payments, action.payload]
            }
            
    
        default:
            return state
    }
}