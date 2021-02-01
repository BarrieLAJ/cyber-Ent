
import {getthePayments,addthePayment,updatethePayment,deletethePayment} from './paymentSlice'

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import { Payment } from "../paymentInterface";
import HttpC from "../../../httpClients";

export const getPayments = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC.get({url: `/payments`}).then((res) => {
    dispatch({
      type: getthePayments.type,
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
  Action<string>
> => (dispatch) => {
  HttpC.post({url: '/payment', body: payment}).then((res) => {
    dispatch({
      type: addthePayment.type,
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
  Action<string>
> => (dispatch) => {
  HttpC.patch({url: `/payment/${_id}`, body: payment}).then((res) => {
    dispatch({
      type: updatethePayment.type,
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
  Action<string>
> => (dispatch) => {
  HttpC.delete({url: `/payment/${_id}`}).then((res) => {
    dispatch({
      type: deletethePayment.type,
      payload: _id,
    });
  });
};
