import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
    Row,
    Table
} from 'reactstrap'
import { getCustomers } from '../actions/customerActions'

const Customers = (props) => {
    useEffect(()=>{
        props.getCustomers()
    },[props.customrs])
    return (
        <div style={{padding: '0.4em'}} className="text-white">
        <Row>
                <h2>Customers</h2>
        </Row>
        {props.customers.length > 0 &&
        <Row noGutters={false}>
                <Table autoCapitalize="true" striped  dark borderless hover className="text-white">
                    <thead>
                        <th>No</th>
                        <th>Customer Number</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>View</th>
                    </thead>
                    <tbody>
                        {props.customers.map((customer,i)=> (  
                                <tr key={customer._id}>
                                    <th>{i+1}</th>
                                    <td>{customer._id}</td>
                                    <td>{customer.name}</td>
                                    <td>{customer.address}</td>
                                    <td>{customer.phone_number}</td>
                                    <td><Link to={`/customer/${customer._id}`}  style={{display: "block"}}>View</Link></td>
                                </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        }
        {!props.customers.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Customer Yet</p>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {

        customers: state.customers.customers
    }
}

export default connect(mapStateToProps, {getCustomers})(Customers)
