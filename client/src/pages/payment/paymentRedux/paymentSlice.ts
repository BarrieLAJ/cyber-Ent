import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Payment, PaymentReducerInterface } from '../paymentInterface'

interface Update {
    _id: string
    payment: Payment
}

const initialState = {
    payments: [],
    loading: true,
    error: false
} as PaymentReducerInterface

const paymentSlice = createSlice(
    {
        name: 'payments',
        initialState: initialState,
        reducers: {
            getthePayments(state, action:PayloadAction<PaymentReducerInterface['payments']>){
                state.payments = action.payload
                state.loading = false
            },
            addthePayment(state,action:PayloadAction<Payment>){
                state.payments.push(action.payload)
            },
            deletethePayment(state,action:PayloadAction<string>){
                state.payments.filter(({ _id }) => _id !== action.payload)
            },
            updatethePayment(state,action: PayloadAction<Update>){
                let paymentToBeUpdated = state.payments.findIndex(
                    (payment) => payment._id === action.payload._id
                  );
                state.payments[paymentToBeUpdated] = { ...action.payload.payment }
            }
        }
    }
)

export const {getthePayments,addthePayment,updatethePayment,deletethePayment} = paymentSlice.actions

export default paymentSlice.reducer
