import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import { Container,  Col, Row} from 'reactstrap'
import {BrowserRouter} from 'react-router-dom'



import  { NavBar }  from './components/NavBar.component'
import {MainPage} from './components/MainPage.component'

import {getProducts} from './actions/productActions'
import {getOrders} from './actions/ordersActions'
import {getCustomers} from './actions/customerActions'
import {getPayments} from './actions/paymentActions'


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
              <Col xs='2' className="pr-0 pl-2" style={{backgroundColor: " #343a40", flex: '0 0 20%', maxWidth: '20%'}}><NavBar /></Col>
              <Col xs='10' className="pr-0 pl-0" style={{backgroundColor: "rgb(26, 23, 44)", flex: '0 0 80%', maxWidth: '80%'}}><MainPage /></Col>
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
