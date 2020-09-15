import {combineReducers} from 'redux'
import productReducer from './productReducer'
import paymentReducer from './paymentReducer'
import ordersReducer from './ordersReducer'
import customerReducer from './customerReducer'


const rootReducer = combineReducers({
    products: productReducer,
    payments: paymentReducer,
    orders: ordersReducer,
    customers: customerReducer
})

export default rootReducer