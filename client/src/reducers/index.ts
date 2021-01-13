import {combineReducers} from 'redux'
import productReducer from '../pages/product/productRedux/productReducer'
import paymentReducer from '../pages/payment/paymentRedux/paymentReducer'
import ordersReducer from '../pages/order/orderRedux/ordersReducer'
import customerReducer from '../pages/customer/customerRedux/customerReducer'




const rootReducer = combineReducers({
    products: productReducer,
    payments: paymentReducer,
    orders: ordersReducer,
    customers: customerReducer
})

export default rootReducer