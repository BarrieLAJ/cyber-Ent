import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  ProductActionType,
} from "./actiontypes";
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
  Action<ProductActionType["type"]>
> => (dispatch) => {
  axios.get(`${url}s`).then((res) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  });
};

export const addProduct = (
  product
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<ProductActionType["type"]>
> => (dispatch) => {
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

export const updateProduct = (
  _id: Product["_id"],
  product: Product
): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<ProductActionType["type"]>
> => (dispatch) => {
  axios.patch(`${url}/${_id}`, product).then((res) => {
    dispatch({
      type: UPDATE_PRODUCT,
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
  Action<ProductActionType["type"]>
> => (dispatch) => {
  axios.delete(`${url}/${_id}`).then((res) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: res.data._id,
    });
  });
};
