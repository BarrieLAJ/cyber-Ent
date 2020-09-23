import React, {useEffect} from 'react'
import {
    Row,
    Container,
    Table
} from 'reactstrap'
import { connect } from 'react-redux'

import {getPayments} from '../actions/paymentActions'

const Payments = (props) => {
    useEffect(()=>{
        props.getPayments()
    },[props.payments])
    return (
        <div className="text-white">
        <Row>
                <h2>Payments</h2>
        </Row>
        <Row noGutters={false}>
            <Container>
                <Table autoCapitalize="true" striped  dark borderless hover className="text-white" >
                    <tr>
                        <th>No</th>
                        <th>Payment Number</th>
                        <th>Payment Amount</th>
                        <th>Payment Type</th>
                        <th>Balance</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Customer Name</th>
                    </tr>
                    <tbody>
                        {props.payments.map((payment,i)=> (
                            <tr key={payment._id}>
                                <th>{i+1}</th>
                                <td>{payment._id}</td>
                                <td>{payment.amount}</td>
                                <td>{payment.payment_type}</td>
                                <td>{payment.balance}</td>
                                <td>{payment.order.product.name + " " + payment.order.product.type}</td>
                                <td>{payment.order.quantity}</td>
                                <td>{payment.customer.name}</td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Total Amount</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>LE {props.payments.reduce((a,b)=> (a + (+b.amount)),0)}</th>
                        </tr>
                        <tr>
                            <th>Total Balance</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>LE {props.payments.reduce((a,{balance})=>(
                                  a + (+balance)
                                ),0)}</th>
                        </tr>
                    </tfoot>
                </Table>
                </Container>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => ({
    payments: state.payments.payments,
})


export default connect(mapStateToProps, {getPayments})(Payments)