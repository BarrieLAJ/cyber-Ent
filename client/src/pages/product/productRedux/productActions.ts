import {
  gettheProducts,
  addtheProduct,
  updatetheProduct,
  deletetheProduct,
} from "./productSlice";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";
// import axios from "axios";
import HttpC from "../../../httpClients/index";
import Product  from "../productInterface";

//const url = "http://localhost:4000/api/cyberEnt/product";

export const getProducts = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC.get({ url: `/products` }).then((res) => {
    dispatch({
      type: gettheProducts.type,
      payload: res.data,
    });
  }).catch(err => console.log(err))
};

export const addProduct = (
  product: Product
): ThunkAction<void, AppStoreInterFace, unknown, Action<string>> => (
  dispatch
) => {

  HttpC.post({ url: "/product", body: product })
    .then((res) => {
      console.log(res.data)
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
): ThunkAction<void, AppStoreInterFace, unknown, Action<string>> => (
  dispatch
) => {
  HttpC.patch({ url: `product/${_id}`, body: product }).then((res) => {
    dispatch({
      type: updatetheProduct.type,
      payload: { product: res.data, _id },
    });
  });
};

export const deleteProduct = (
  _id: Product["_id"]
): ThunkAction<void, AppStoreInterFace, unknown, Action<string>> => (
  dispatch
) => {
  HttpC.delete({ url: `product/${_id}` }).then((res) => {
    dispatch({
      type: deletetheProduct.type,
      payload: _id,
    });
  });
};
