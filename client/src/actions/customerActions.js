import {
  UPDATE_CUSTOMER,
  DELETE_CUSTOMER,
  ADD_CUSTOMER,
  GET_CUSTOMERS,
} from "./actions";
import axios from "axios";

export const getCustomers = () => (dispatch) => {
  axios.get("http://localhost:4000/api/cyberEnt/customers").then((res) => {
    dispatch({
      type: GET_CUSTOMERS,
      payload: res.data,
    });
  });
};

export const addCustomer = (customer) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/cyberEnt/customer", customer)
    .then((res) => {
      dispatch({
        type: ADD_CUSTOMER,
        payload: res.data,
      });
    });
};

export const updateCustomer = (_id, customer) => (dispatch) => {
  axios
    .patch(`http://localhost:4000/api/cyberEnt/customer/${_id}`, customer)
    .then((res) => {
      dispatch({
        type: UPDATE_CUSTOMER,
        payload: { customer: res.data, _id },
      });
    });
};

export const deleteCustomers = (_id) => (dispatch) => {
  axios
    .delete(`http://localhost:4000/api/cyberEnt/customer/${_id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CUSTOMER,
        payload: res.data._id,
      });
    });
};
