import React, {useEffect} from 'react'
import {
    Row,
    Container,
    Table
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'

import {getPayments} from '../payment/paymentRedux/paymentActions'
import { paymentsSelector } from '../customer/customerSelectors'
import { loadStateSelector, totalAmoutselector, totalBalanceSelector } from './paymentSelectors'

const Payments = (props) => {

    const dispatch = useDispatch()
    const payments = useSelector(paymentsSelector)
    const totalAmount = useSelector(totalAmoutselector)
    const totalBalance = useSelector(totalBalanceSelector)
    const loadState = useSelector(loadStateSelector)


    useEffect(()=>{
        dispatch(getPayments())
    },[])
    return (
        <div style={{padding: '0.4em'}} className="text-white">
        <Row>
                <h2>Payments</h2>
        </Row>
        {loadState && <Row><h1>Loading...</h1></Row>}
        {payments.length > 0 &&
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
                        {payments.map((payment,i)=> (
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
                            <th>LE {totalAmount}</th>
                        </tr>
                        <tr>
                            <th>Total Balance</th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>LE {totalBalance}</th>
                        </tr>
                    </tfoot>
                </Table>
                </Container>
            </Row>
        }
        {!payments.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Payment Yet</p>}
        </div>
    )
}



export default Payments