import {
  GET_PAYMENTS,
  ADD_PAYMENT,
  DELETE_PAYMENT,
  UPDATE_PAYMENT,
  PaymentActionType,
} from "./actiontypes";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";
import { Payment } from "../paymentInterface";

const url = "http://localhost:4000/api/cyberEnt/payment";

export const getPayments = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<PaymentActionType["type"]>
> => (dispatch) => {
  axios.get(`${url}s`).then((res) => {
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data,
    });
  });
};

export const addPayment = (
  payment: Payment
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<PaymentActionType["type"]>
> => (dispatch) => {
  axios.post(url, payment).then((res) => {
    dispatch({
      type: ADD_PAYMENT,
      payload: res.data,
    });
  });
};

export const updatePayment = (
  _id: Payment["_id"],
  payment: Payment
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<PaymentActionType["type"]>
> => (dispatch) => {
  axios.patch(`${url}/${_id}`, payment).then((res) => {
    dispatch({
      type: UPDATE_PAYMENT,
      payload: { payment: res.data, _id },
    });
  });
};

export const deletePayment = (
  _id: Payment["_id"]
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<PaymentActionType["type"]>
> => (dispatch) => {
  axios.delete(`${url}/${_id}`).then((res) => {
    dispatch({
      type: DELETE_PAYMENT,
      payload: res.data._id,
    });
  });
};
