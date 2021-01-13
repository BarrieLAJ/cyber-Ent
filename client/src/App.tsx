import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Container,  Col, Row} from 'reactstrap'
import {BrowserRouter} from 'react-router-dom'



import  { NavBar }  from './components/NavBar.component'
import {MainPage} from './components/MainPage.component'

import {getProducts} from './pages/product/productRedux/productActions'
import {getOrders} from './pages/order/orderRedux/ordersActions'
import {getCustomers} from './pages/customer/customerRedux/customerActions'
import {getPayments} from './pages/payment/paymentRedux/paymentActions'


import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
function App(props) {

  useEffect( () => {
        props.getProducts()
        props.getCustomers()
        props.getPayments()
        props.getOrders()
  },[])
  return (
    
      <BrowserRouter>
        <Container fluid style={{paddingLeft: '0'}}>
          {/* <div className="App"> */}
            <Row className="">
              <Col xs='2' className="pr-0 pl-2" style={{backgroundColor: " #343a40", flex: '0 0 15%', maxWidth: '15%'}}><NavBar /></Col>
              <Col xs='10' className="pr-0 pl-0" style={{backgroundColor: "rgb(26, 23, 44)", flex: '0 0 85%', maxWidth: '85%'}}><MainPage /></Col>
            </Row>
          {/* </div> */}
        </Container>
      </BrowserRouter>
    
  );
}

export default connect(null, {
  getProducts,
  getOrders,
  getCustomers,
  getPayments
})(App);
