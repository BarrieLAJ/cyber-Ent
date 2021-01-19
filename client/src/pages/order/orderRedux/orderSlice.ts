import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {Order, OrderReducerinterface} from '../orderinterface'

interface Update {
    _id: Order['_id']
    order: Order
}


const initialState = {
    orders: [],
    loading: true,
    error: false
} as OrderReducerinterface

const orderSlice = createSlice(
    {
        name: 'orders',
        initialState: initialState,
        reducers: {
            getOrders(state, action: PayloadAction<OrderReducerinterface['orders']>){
                state.orders = action.payload
                state.loading = false
            },
            addOrder(state,action: PayloadAction<Order>){
                state.orders.push(action.payload)
            },
            deleteOrder(state,action:PayloadAction<string>){
                state.orders.filter(({ _id }) => _id !== action.payload)
            },
            updateOrder(state,action:PayloadAction<Update>){
                let orderToBeUpdated = state.orders.findIndex(
                    (order) => order._id === action.payload._id
                  );
                state.orders[orderToBeUpdated] = { ...action.payload.order }
            }
        }
    }
)

export const {getOrders,addOrder,updateOrder,deleteOrder} = orderSlice.actions

export default orderSlice.reducer
