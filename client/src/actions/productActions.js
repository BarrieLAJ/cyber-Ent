import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./actions";
import axios from "axios";

const url = "http://localhost:4000/api/cyberEnt/product";

export const getProducts = () => (dispatch) => {
  axios.get(`${url}s`).then((res) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  });
};

export const addProduct = (product) => (dispatch) => {
  axios
    .post(url, product)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (_id, product) => (dispatch) => {
  axios.patch(`${url}${_id}`, product).then((res) => {
    dispatch({
      type: UPDATE_PRODUCT,
      payload: { product: res.data, _id },
    });
  });
};

export const deleteProduct = (_id) => (dispatch) => {
  axios.delete(`${url}${_id}`).then((res) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data_id,
    });
  });
};
