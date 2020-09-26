import React from 'react'
import {connect} from 'react-redux'
import {
    Row, 
    Col, 
    ButtonGroup, 
    Button, 
    Card, 
    CardTitle, 
    Badge,
    } from 'reactstrap'
import { Link } from 'react-router-dom'
// import {getProducts} from '../actions/productActions'
// import {getCustomers} from '../actions/customerActions'
// import {getOrders} from '../actions/ordersActions'
// import {getPayments} from '../actions/paymentActions'


const Dashboard = (props) => {


    return (
        <div style={{padding: "1em 2em"}}>
            <Row noGutters={false} style={{margin: "0.7em 0", marginBottom: "0.7em"}}>
                <ButtonGroup className="clearfix" size="lg">
                    <Link to="/sales" style={{display: "block", color: 'none', textDecoration: "none" }}><Button block color="info" size="lg" outline>PUT IN ORDER</Button></Link>
                </ButtonGroup>
            </Row>
            <Row style={{height: "300px", marginBottom: "0.7em"}}>
                <Col>
                <Card body outline color="primary">
                    <CardTitle>Product</CardTitle>
                    <h3><Badge color="primary">{props.products.length}</Badge></h3>
                    <Link to="/products" style={{display: "block", color: 'none', textDecoration: "none" }}><Button color="primary">Products</Button></Link>
                </Card> 
                </Col>
                <Col>
                <Card body outline color="warning">
                    <CardTitle>Customers</CardTitle>
                    <h3><Badge color="warning">{props.customers.length}</Badge></h3>
                    <Link to="/customers" style={{display: "block", color: 'none', textDecoration: "none" }}><Button color="warning">Customers</Button></Link>
                </Card> 
                </Col>
                <Col>
                <Card body outline color="dark">
                    <CardTitle>Orders</CardTitle>
                    <h3><Badge color="dark">{props.orders.length}</Badge></h3>
                    <Link to="/orders" style={{display: "block", color: 'none', textDecoration: "none" }}><Button color="dark">Orders</Button></Link>
                </Card> 
                </Col>
                <Col>
                <Card body outline color="success">
                    <CardTitle>Payments</CardTitle>
                    <h3><Badge color="success">{props.payments.length}</Badge></h3>
                    <Link to="/payments" style={{display: "block", color: 'none', textDecoration: "none" }}><Button color="success">Payments</Button></Link>
                </Card> 
                </Col>
            </Row>
            <Row style={{height: "300px", marginBottom: "0.7em"}}>
                <Col>
                <h2>A graph will be here</h2>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products,
        payments: state.payments.payments,
        customers: state.customers.customers,
        orders: state.orders.orders
    }
}

export default connect(mapStateToProps)(Dashboard)
