import {addOrder,getOrders,deleteOrder,updateOrder} from './orderSlice'
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";
import { Order } from "../orderinterface";
import HttpC from '../../../httpClients';

export const gettheOrders = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC.get({url: '/orders'}).then((res) => {
    dispatch({
      type: getOrders.type,
      payload: res.data,
    });
  });
};

export const addtheOrder = (
  order: Order
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC.post({url: "/order", body: order}).then((res) => {
    dispatch({
      type: addOrder.type,
      payload: res.data,
    });
  });
};

export const updatetheOrder = (
  _id: Order["_id"],
  order: Order
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC
    .patch({url: `/order/${_id}`, body: order})
    .then((res) => {
      dispatch({
        type: updateOrder.type,
        payload: { order: res.data, _id },
      });
    });
};

export const deletetheOrder = (
  _id: Order["_id"]
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC
    .delete({url: `/order/${_id}`})
    .then((res) => {
      dispatch({
        type: deleteOrder.type,
        payload: _id,
      });
    });
};
