
import {gettheCustomer,addtheCustomer,updatetheCustomer,deletetheCustomer} from './customerSlice'

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";
import { Customer } from "../customerinterface";

export const getCustomers = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/customers").then((res) => {
    dispatch({
      type: gettheCustomer.type,
      payload: res.data,
    });
  });
};

export const addCustomer
 = (customer: Customer): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>> => (dispatch) => {
  axios
    .post("http://localhost:4000/api/cyberEnt/customer", customer)
    .then((res) => {
      dispatch({
        type: addtheCustomer.type,
        payload: res.data,
      });
    });
};

export const updateCustomer = (_id: string, customer: Customer): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios
    .patch(`http://localhost:4000/api/cyberEnt/customer/${_id}`, customer)
    .then((res) => {
      dispatch({
        type: updatetheCustomer.type,
        payload: { customer: res.data, _id },
      });
    });
};

export const deleteCustomers = (_id: string): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/cyberEnt/customer/${_id}`)
    .then((res) => {
      dispatch({
        type: deletetheCustomer.type,
        payload: res.data._id,
      });
    });
};
