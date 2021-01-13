import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {
    Row,
    Table
} from 'reactstrap'
import {getOrders} from './orderRedux/ordersActions'

const Orders = (props) => {
    useEffect(()=>{
        props.getOrders();
    })
    return (
        <div style={{padding: '0.4em'}}className="text-white">
        <Row>
                <h2>Orders</h2>
        </Row>
        {props.orders.length > 0 &&
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
                        {props.orders.map((order,i) => (
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
        {!props.orders.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Order Yet</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
        products: state.products.products
    }
}


export default connect(mapStateToProps, {getOrders})(Orders)