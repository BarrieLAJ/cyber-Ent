import {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  OrderActionType
} from "./actiontype";

import {OrderReducerinterface} from '../orderinterface'

const initstate: OrderReducerinterface = {
  orders: [],
  error: false,
  loading: true
};

export default (state = initstate, action: OrderActionType): OrderReducerinterface => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: action.payload,
        loading: false
      };
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(({ _id }) => _id !== action.payload),
      };
    case UPDATE_ORDER:
      let orderToBeUpdated = state.orders.findIndex(
        (order) => order._id === action.payload._id
      );
      let newOrders = [...state.orders];
      newOrders[orderToBeUpdated] = { ...action.payload.order };
      return {
        ...state,
        orders: [...newOrders],
      };

    default:
      return state;
  }
};
