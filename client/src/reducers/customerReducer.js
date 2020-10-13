import {
  GET_CUSTOMERS,
  ADD_CUSTOMER,
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
} from "../actions/actions";

const initstate = {
  customers: [],
};

export default (state = initstate, action) => {
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
