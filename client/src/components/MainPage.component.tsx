import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import Dashboard from './Dashboard'
import Customers from '../pages/customer/Customers'
import Product from '../pages/product/Product'
import Payments from '../pages/payment/Payment'
import Orders from '../pages/order/Orders'
import Sales from './Sales'
import CustomerDetails from '../pages/customer/CustomerDetails'

export const MainPage = () => {
    return (
        <Container style={{height: '100vh', maxHeight:'100vh', fontSize: '15px', overflow: 'scroll'}}>
            
                <Switch>
                    <Route path='/' exact component={Dashboard}/>
                    <Route path='/products' component={Product} />
                    <Route path='/customers' component={Customers} />
                    <Route path='/payments' component={Payments} />
                    <Route path='/orders' component={Orders} />
                    <Route path='/sales' component={Sales}/>
                    <Route path='/customer/:id' component={CustomerDetails} />
                </Switch>
            
        </Container>
    )
}
