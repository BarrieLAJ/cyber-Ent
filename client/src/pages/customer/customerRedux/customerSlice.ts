import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Customer, CustomerReducerState } from '../customerinterface'

interface Update {
    _id: string
    customer: Customer
}

const initialState = {
    customers: Array(0),
    loading: true,
    error: false
} as CustomerReducerState

const customerSlice = createSlice(
    {
        name: 'customers',
        initialState: initialState,
        reducers: {
            gettheCustomer(state, action: PayloadAction<CustomerReducerState['customers']>){
                state.customers = action.payload
                state.loading = false
            },
            addtheCustomer(state,action:PayloadAction<Customer>){
                state.customers.push(action.payload)
            },
            deletetheCustomer(state,action: PayloadAction<string>){
                state.customers.filter(({ _id }) => _id !== action.payload)
            },
            updatetheCustomer(state,action: PayloadAction<Update>){
                let customerToBeUpdated = state.customers.findIndex(
                    (customer) => customer._id === action.payload._id
                  );
                state.customers[customerToBeUpdated] = { ...action.payload.customer }
            }
        }
    }
)

export const {gettheCustomer,addtheCustomer,updatetheCustomer,deletetheCustomer} = customerSlice.actions

export default customerSlice.reducer
