import {gettheProducts,addtheProduct,updatetheProduct,deletetheProduct} from './productSlice'


import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";
import axios from "axios";
import { Product } from "../productInterface";

const url = "http://localhost:4000/api/cyberEnt/product";

export const getProducts = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios.get(`${url}s`).then((res) => {
    dispatch({
      type: gettheProducts.type,
      payload: res.data,
    });
  });
};

export const addProduct = (
  product: Product
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios
    .post(url, product)
    .then((res) => {
      dispatch({
        type: addtheProduct.type,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateProduct = (
  _id: Product["_id"],
  product: Product
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios.patch(`${url}/${_id}`, product).then((res) => {
    dispatch({
      type: updatetheProduct.type,
      payload: { product: res.data, _id },
    });
  });
};

export const deleteProduct = (
  _id: Product["_id"]
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios.delete(`${url}/${_id}`).then((res) => {
    dispatch({
      type: deletetheProduct.type,
      payload: res.data._id,
    });
  });
};
