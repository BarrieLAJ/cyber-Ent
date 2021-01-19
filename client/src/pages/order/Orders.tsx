import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {
    Row,
    Table
} from 'reactstrap'
import { Order } from './orderinterface'
import {gettheOrders} from './orderRedux/ordersActions'
import { loadStateSelector, ordersSelector } from './orderRedux/orderSelectors'

const Orders = () => {
    const dispatch = useDispatch()
    const orders = useSelector(ordersSelector)
    const loadState = useSelector(loadStateSelector)
    useEffect(()=>{
        dispatch(gettheOrders())
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
                        {orders.map((order: Order,i: number) => (
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