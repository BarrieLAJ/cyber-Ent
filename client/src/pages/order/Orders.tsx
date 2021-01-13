import React, {useEffect} from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'
import {
    Row,
    Table
} from 'reactstrap'
import {getOrders} from './orderRedux/ordersActions'
import { loadStateSelector, ordersSelector } from './orderRedux/orderSelectors'

const Orders = (props) => {
    const dispatch = useDispatch()
    const orders = useSelector(ordersSelector)
    const loadState = useSelector(loadStateSelector)
    useEffect(()=>{
        dispatch(getOrders())
    },[])
    return (
        <div style={{padding: '0.4em'}}className="text-white">
        <Row>
                <h2>Orders</h2>
        </Row>
        {loadState && <Row><h1>Loading...</h1></Row>}
        {orders.length > 0 &&
        <Row noGutters={false}>
                <Table autoCapitalize="true" striped  dark borderless hover className="text-white">
                    <thead>
                        <th>No</th>
                        <th>Order Number</th>
                        <th>Total Cost</th>
                        <th>Product</th>
                        <th>Quantity</th>
                    </thead>
                    <tbody>
                        {orders.map((order,i) => (
                            <tr key={order._id}>
                                <th>{i+1}</th>
                                <td>{order._id}</td>
                                <td>{order.total_cost}</td>
                                <td>{order.product.name}</td>
                                <td>{order.quantity}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        }
        {!orders.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Order Yet</p>}
        </div>
    )
}



export default Orders