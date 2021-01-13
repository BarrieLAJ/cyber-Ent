import React, { ReactNode, useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import { getCustomers } from "./customerRedux/customerActions";
import { getProducts } from "../product/productRedux/productActions";
import { getOrders } from "../order/orderRedux/ordersActions";
import { getPayments } from "../payment/paymentRedux/paymentActions";
import { addPayment } from "../../actions/addCustomerAction";
import axios from "axios";

//interface
import { Customer } from './customerinterface'

const CustomerDetails = (props) => {
  // console.log(props.match.params.id)
  const [customer, setcustomer] = useState<Customer | null>();

  const getCustomer = (id) => {
    axios
      .get(`http://localhost:4000/api/cyberEnt/customer/${id}`)
      .then((result) => {
        setcustomer(result.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCustomer(props.match.params.id);
    // props.getCustomers()
    // props.getProducts()
    // props.getOrders()
    // props.getPayments()
  }, []);

  const completePayment = (_id, amount) => {};

  return props.customers.length > 0 ? (
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
              props.orders.filter(
                (order) => customer._id === order.customer._id
              ).length
            }
          </Col>
          <Col>
            {
              props.payments.filter(
                (payment) => customer._id === payment.customer._id
              ).length
            }
          </Col>
        </Row>
      </div>
      <div className="m-3">
        <Row>
          <h2>Payments Made</h2>
        </Row>
        {props.payments
          .filter((payment) => customer._id === payment.customer._id)
          .map((payment, i) => {
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
      {props.payments
        .filter((payment) => customer._id === payment.customer._id)
        .filter((payment) => payment.balance >= 1).length != 0 ? (
        props.payments
          .filter((payment) => customer._id === payment.customer._id)
          .filter((payment) => payment.balance >= 1)
          .map((payment, i) => {
            return (
              <Row key={payment._id}>
                <Col>{payment.order.product.name}</Col>
                <Col>{payment.order.quantity}</Col>
                <Col>Le {payment.amount}</Col>
                <Col>Le {payment.balance}</Col>
                <Col>{new Date(payment.created_at).toDateString()}</Col>
                <Col>
                  <Button color="success" onClick={completePayment(12, 200)}>
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
    <Container className="m-auto text-white">No Customers yet</Container>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
  products: state.products.products,
  orders: state.orders.orders,
  payments: state.payments.payments,
});

const mapDispatchToProps = {
  getCustomers,
  getOrders,
  getProducts,
  getPayments,
  addPayment,
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails);
