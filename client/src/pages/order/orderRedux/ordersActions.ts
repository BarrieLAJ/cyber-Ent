import {
  GET_ORDERS,
  ADD_ORDER,
  UPDATE_ORDER,
  DELETE_ORDER,
  OrderActionType,
} from "./actiontype";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";
import { Order } from "../orderinterface";

export const getOrders = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<OrderActionType["type"]>
> => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/orders").then((res) => {
    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  });
};

export const addOrder = (
  order: Order
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<OrderActionType["type"]>
> => (dispatch) => {
  axios.post("http://localhost:4000/api/cyberEnt/order", order).then((res) => {
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    });
  });
};

export const updateOrder = (
  _id: Order["_id"],
  order: Order
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<OrderActionType["type"]>
> => (dispatch) => {
  axios
    .patch(`http://localhost:4000/api/cyberEnt/order/${_id}`, order)
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER,
        payload: { order: res.data, _id },
      });
    });
};

export const deleteOrder = (
  _id: Order["_id"]
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<OrderActionType["type"]>
> => (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/cyberEnt/order/${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ORDER,
        payload: res.data._id,
      });
    });
};
