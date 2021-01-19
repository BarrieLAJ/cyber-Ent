// import {
//   GET_ORDERS,
//   ADD_ORDER,
//   UPDATE_ORDER,
//   DELETE_ORDER,
//   OrderActionType,
// } from "./actiontype";

import {addOrder,getOrders,deleteOrder,updateOrder} from './orderSlice'
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";
import { Order } from "../orderinterface";

export const gettheOrders = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/orders").then((res) => {
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
  axios.post("http://localhost:4000/api/cyberEnt/order", order).then((res) => {
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
  axios
    .patch(`http://localhost:4000/api/cyberEnt/order/${_id}`, order)
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
  axios
    .delete(`http://localhost:4000/api/cyberEnt/order/${_id}`)
    .then((res) => {
      dispatch({
        type: deleteOrder.type,
        payload: res.data._id,
      });
    });
};
