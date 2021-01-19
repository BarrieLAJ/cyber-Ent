import {combineReducers} from '@reduxjs/toolkit'
import productReducer from '../pages/product/productRedux/productSlice'
import paymentReducer from '../pages/payment/paymentRedux/paymentSlice'
import ordersReducer from '../pages/order/orderRedux/orderSlice'
import customerReducer from '../pages/customer/customerRedux/customerSlice'




const rootReducer = combineReducers({
    products: productReducer,
    payments: paymentReducer,
    orders: ordersReducer,
    customers: customerReducer
})

export default rootReducer