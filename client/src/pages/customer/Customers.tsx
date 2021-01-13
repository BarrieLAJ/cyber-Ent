import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {
    Row,
    Table
} from 'reactstrap'
import { getCustomers } from './customerRedux/customerActions'
import { customersSelector, loadStateSelector } from './customerSelectors'

const Customers = (props) => {
    const dispatch = useDispatch()
    const loadState = useSelector(loadStateSelector)
    const customers = useSelector(customersSelector)
    useEffect(()=>{
        dispatch(getCustomers())
    },[])
    return (
        
        <div style={{padding: '0.4em'}} className="text-white">
        <Row>
                <h2>Customers</h2>
        </Row>
        {loadState && <Row><h1>Loading...</h1></Row>}
        {customers.length > 0 &&
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
                        {customers.map((customer,i)=> (  
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
        {!customers.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Customer Yet</p>}
        </div>
    )
}



export default Customers
