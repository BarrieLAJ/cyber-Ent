import React, {  useEffect, useState } from "react";
import { useDispatch,connect, useSelector } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
// import { getCustomers } from "./customerRedux/customerActions";
// import { getProducts } from "../product/productRedux/productActions";
// import { gettheOrders } from "../order/orderRedux/ordersActions";
import { getPayments, updatePayment } from "../payment/paymentRedux/paymentActions";
import axios from "axios";


import {
    getCustomerId,
    loadStateSelector,
    cuspaymentFilter,
    customersSelector,
    customerSelector,
    ordersSelector,
    ordersCount,
    cusPaymentAriasFilter
} from './customerSelectors'
//interface
import { Customer } from './customerinterface'
import { Payment } from "../payment/paymentInterface";

const CustomerDetails = (props) => {
  // console.log(props.match.params.id)
  //const [customer, setcustomer] = useState<Customer | null>();
  const dispatch = useDispatch()
  const customer = useSelector(state => customerSelector(state,props))
  const isLoading = useSelector(loadStateSelector)
  const orderCount = useSelector(state => ordersCount(state, props))
  const paymentMade = useSelector(state => cuspaymentFilter(state,props))
  const paymentArias = useSelector(state => cusPaymentAriasFilter(state,props))


  const completePayment = (_id: Payment['_id'], amount: Payment['balance'], payment: Payment) => {
    let newPayment = {
      ...payment,
      amount: payment.amount + amount,
      balance: 0
    } as Payment
    dispatch(updatePayment(_id,newPayment))
  };

  return isLoading === false ? (
    <Container className="text-white my-3 a-auto" style={{fontSize: '14px'}}>
      <div className="m-3">
        <Row>
          <h2>Customer Details</h2>
        </Row>
        <Row>
          <Col>Name</Col>
          <Col>Address</Col>
          <Col>Phone Number</Col>
          <Col>Orders Made</Col>
          <Col>Payments Made</Col>
        </Row>
        <Row>
          <Col>{customer.name}</Col>
          <Col>{customer.address}</Col>
          <Col>{customer.phone_number}</Col>
          <Col>
            {
              // props.orders.filter(
              //   (order) => customer._id === order.customer._id
              // ).length
              orderCount
            }
          </Col>
          <Col>
            {/* {
              props.payments.filter(
                (payment) => customer._id === payment.customer._id
              ).length
            } */
            paymentMade.length}
          </Col>
        </Row>
      </div>
      <div className="m-3">
        <Row>
          <h2>Payments Made</h2>
        </Row>
        {paymentMade
          .map((payment: Payment, i: number) => {
            return (
              <Row key={payment._id}>
                <Col>{payment.order.product.name}</Col>
                <Col>{payment.amount}</Col>
                <Col>{payment.payment_type}</Col>
                <Col>{new Date(payment.created_at).toDateString()}</Col>
              </Row>
            );
          })}
      </div>
      <div className="m-3">
        <Row>
          <h2>Arias</h2>
        </Row>
        <Row>
          <Col>Product</Col>
          <Col>Quantity</Col>
          <Col>Amount Paid</Col>
          <Col>Balance</Col>
          <Col>Payment Date</Col>
          <Col>
            Complete
          </Col>
        </Row>
      </div>
      {paymentArias.length != 0 ? (
        paymentArias
          .map((payment: Payment, i: number) => {
            return (
              <Row key={payment._id}>
                <Col>{payment.order.product.name}</Col>
                <Col>{payment.order.quantity}</Col>
                <Col>Le {payment.amount}</Col>
                <Col>Le {payment.balance}</Col>
                <Col>{new Date(payment.created_at).toDateString()}</Col>
                <Col>
                  <Button color="success" onClick={()=>completePayment(payment._id, payment.balance, payment)}>
                    Complete
                  </Button>
                </Col>
              </Row>
            );
          })
      ) : (
        <Row className='m-auto' style={{justifyContent: "center"}}>This Customer has got no arias</Row>
      )}
    </Container>
  ) : (
    <Container className="m-auto text-white">Loading</Container>
  );
};




// export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
export default CustomerDetails