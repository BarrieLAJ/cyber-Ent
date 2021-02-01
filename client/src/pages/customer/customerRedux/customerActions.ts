
import {gettheCustomer,addtheCustomer,updatetheCustomer,deletetheCustomer} from './customerSlice'

import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppStoreInterFace } from "../../../store/store";

import { Customer } from "../customerinterface";
import HttpC from '../../../httpClients';

export const getCustomers = (): ThunkAction<
  void,
  AppStoreInterFace,
  unknown,
  Action<string>
> => (dispatch) => {
  HttpC.get({url: "/customers"}).then((res) => {
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
  HttpC
    .post({url: "/customer", body: customer})
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
  HttpC
    .patch({url: `/customer/${_id}`, body: customer})
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
  HttpC
    .delete({url: `/customer/${_id}`})
    .then((res) => {
      dispatch({
        type: deletetheCustomer.type,
        payload: _id,
      });
    });
};
