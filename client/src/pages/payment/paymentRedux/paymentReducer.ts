import {
  GET_PAYMENTS,
  ADD_PAYMENT,
  DELETE_PAYMENT,
  UPDATE_PAYMENT,
} from "../../../actions/actions";
import { PaymentReducerInterface } from "../paymentInterface";
import { PaymentActionType } from "./actiontypes";

const initstate: PaymentReducerInterface = {
  payments: [],
};

export default (state = initstate, action: PaymentActionType): PaymentReducerInterface => {
  switch (action.type) {
    case GET_PAYMENTS:
      return {
        ...state,
        payments: action.payload,
      };
    case ADD_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };
    case DELETE_PAYMENT:
      return {
        ...state,
        payments: [...state.payments, action.payload],
      };
    case UPDATE_PAYMENT:
      let paymentToBeUpdated = state.payments.findIndex(
        (payment) => payment._id === action.payload._id
      );
      let newPayment = [...state.payments];
      newPayment[paymentToBeUpdated] = { ...action.payload.payment };
      return {
        ...state,
        payments: [...newPayment],
      };

    default:
      return state;
  }
};
