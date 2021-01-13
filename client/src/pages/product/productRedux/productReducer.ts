import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./actiontypes";

import {ProductReducerInterface} from '../productInterface'
import {ProductActionType} from './actiontypes'

const initstate: ProductReducerInterface = {
  products: [],
  error: false,
  loading: false
};

export default (state = initstate, action:ProductActionType): ProductReducerInterface => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product._id !== action.payload
        ),
      };
    case UPDATE_PRODUCT:
      let productToBeUpdated = state.products.findIndex(
        (product) => product._id === action.payload._id
      );
      let newProducts = [...state.products];
      newProducts[productToBeUpdated] = { ...action.payload.product };
      return {
        ...state,
        products: [...newProducts],
      };

    default:
      return state;
  }
};
