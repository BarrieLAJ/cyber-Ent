import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  CustomerActionType
} from "./actiontypes";


import {CustomerReducerState}  from '../customerinterface'



const initstate : CustomerReducerState = {
  customers: [],
  loading: false,
  error: false
};

export default (state = initstate, action: CustomerActionType): CustomerReducerState => {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };
    case ADD_CUSTOMER:
      return {
        ...state,
        customers: [...state.customers, action.payload],
      };
    case DELETE_CUSTOMER:
      return {
        ...state,
        customers: state.customers.filter(({ _id }) => _id !== action.payload),
      };
    case UPDATE_CUSTOMER:
      let customerToBeUpdated = state.customers.findIndex(
        (customer) => customer._id === action.payload._id
      );
      let newCustomer = [...state.customers];
      newCustomer[customerToBeUpdated] = { ...action.payload.customer };
      return {
        ...state,
        customers: [...newCustomer],
      };

    default:
      return state;
  }
};
