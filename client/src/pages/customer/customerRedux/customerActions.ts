import {
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  ADD_CUSTOMER,
  GET_CUSTOMERS,
  CustomerActionType,
} from "./actiontypes";

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import axios from "axios";

export const getCustomers = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<CustomerActionType["type"]>
> => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/customers").then((res) => {
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  });
};

export const addCustomer: ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<CustomerActionType["type"]>
> = (customer) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/cyberEnt/customer", customer)
    .then((res) => {
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data,
      });
    });
};

export const updateCustomer: ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<CustomerActionType["type"]>
> = (_id, customer) => (dispatch) => {
  axios
    .patch(`http://localhost:4000/api/cyberEnt/customer/${_id}`, customer)
    .then((res) => {
      dispatch({
        type: UPDATE_CUSTOMER,
        payload: { customer: res.data, _id },
      });
    });
};

export const deleteCustomers: ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<CustomerActionType["type"]>
> = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/cyberEnt/customer/${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: res.data._id,
      });
    });
};
