import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { Product, ProductReducerInterface } from '../productInterface'

interface Update {
    _id: string
    product: Product
}

const initialState = {
    products: [],
    loading: true,
    error: false
} as ProductReducerInterface

const productSlice = createSlice(
    {
        name: 'products',
        initialState: initialState,
        reducers: {
            gettheProducts(state, action:PayloadAction<ProductReducerInterface['products']>){
                state.products = action.payload
                state.loading = false
            },
            addtheProduct(state,action:PayloadAction<Product>){
                state.products.push(action.payload)
            },
            deletetheProduct(state,action:PayloadAction<string>){
                state.products.filter(({ _id }) => _id !== action.payload)
            },
            updatetheProduct(state,action: PayloadAction<Update>){
                let productToBeUpdated = state.products.findIndex(
                    (product) => product._id === action.payload._id
                  );
                state.products[productToBeUpdated] = { ...action.payload.product }
            }
        }
    }
)

export const {gettheProducts,addtheProduct,updatetheProduct,deletetheProduct} = productSlice.actions

export default productSlice.reducer
