import {
  GET_PAYMENTS,
  ADD_PAYMENT,
  DELETE_PAYMENT,
  UPDATE_PAYMENT,
} from "../actions/actions";
import axios from "axios";

const url = "https://localhost:4000/api/cyberEnt/payment";

export const getPayments = () => (dispatch) => {
  axios.get(`${url}s`).then((res) => {
    dispatch({
      type: GET_PAYMENTS,
      payload: res.data,
    });
  });
};

export const addPayment = (payment) => (dispatch) => {
  axios.post(url, payment).then((res) => {
    dispatch({
      type: ADD_PAYMENT,
      payload: res.data,
    });
  });
};

export const updatePayment = (_id, payment) => (dispatch) => {
  axios.patch(`${url}${_id}`, payment).then((res) => {
    dispatch({
      type: UPDATE_PAYMENT,
      payload: { payment: res.data, _id },
    });
  });
};

export const deletePayment = (_id) => (dispatch) => {
  axios.delete(`${url}${_id}`).then((res) => {
    dispatch({
      type: DELETE_PAYMENT,
      payload: res.data_id,
    });
  });
};
