import { GET_ORDERS, ADD_ORDER, UPDATE_ORDER, DELETE_ORDER } from "./actions";
import axios from "axios";

export const getOrders = () => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/orders").then((res) => {
    dispatch({
      type: GET_ORDERS,
      payload: res.data,
    });
  });
};

export const addOrder = (order) => (dispatch) => {
  axios.post("http://localhost:4000/api/cyberEnt/order", order).then((res) => {
    dispatch({
      type: ADD_ORDER,
      payload: res.data,
    });
  });
};

export const updateOrder = (_id, order) => (dispatch) => {
  axios
    .patch(`http://localhost:4000/api/cyberEnt/order/${_id}`, order)
    .then((res) => {
      dispatch({
        type: UPDATE_ORDER,
        payload: { order: res.data, _id },
      });
    });
};

export const deleteOrder = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/cyberEnt/order/${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_ORDER,
        payload: res.data._id,
      });
    });
};
