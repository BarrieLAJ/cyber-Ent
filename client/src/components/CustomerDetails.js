import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {Container, Row, Col, Button} from 'reactstrap'
import {getCustomers} from '../actions/customerActions'
import {getProducts} from '../actions/productActions'
import {getOrders} from '../actions/ordersActions'
import {getPayments} from '../actions/paymentActions'
import {addPayment} from '../actions/addCustomerAction'

const CustomerDetails = (props) => {
    console.log(props.match.params.id)

    useEffect(()=>{
        props.getCustomers()
        props.getProducts()
        props.getOrders()
        props.getPayments()
    },[])

    const completePayment = (_id, amount) => {
        
    }
    
        return (
                
                props.customers.length > 0 
                ?
                <Container className="text-white my-3">
                    <div className="m-3">
                       <Row><h2>Customer Details</h2></Row>
                       <Row>
                            <Col>Name</Col>
                            <Col>Phone Number</Col>
                            <Col>Address</Col>
                            <Col>Total Orders</Col>
                            <Col>Total Payments</Col>
                        </Row>
                    </div>
                    <div className="m-3">
                       <Row><h2>Payments Made</h2></Row> 
                        <Row>
                            <Col>Product</Col>
                            <Col>Amount Paid</Col>
                            <Col>Payment Type</Col>
                            <Col>Payment Date</Col>
                        </Row>
                    </div>
                    <div className="m-3">
                        <Row><h2>Arias</h2></Row>
                        <Row>
                            <Col>Product</Col>
                            <Col>Quantity</Col>
                            <Col>Amount Paid</Col>
                            <Col>Payment Date</Col>
                            <Col><Button color='success' onClick={completePayment(12,200)}>Complete</Button></Col>
                        </Row>
                    </div>
                </Container>
                :
                <Container className="m-auto text-white">No Customers yet</Container>
                
                
        )
}

const mapStateToProps = (state) => ({
    customers: state.customers.customers,
    products: state.products.products,
    orders: state.orders.orders,
    payments: state.payments.payments
})

const mapDispatchToProps = {
    getCustomers,
    getOrders,
    getProducts,
    getPayments,
    addPayment
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerDetails)
