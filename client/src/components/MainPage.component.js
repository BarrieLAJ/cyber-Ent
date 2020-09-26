import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Container} from 'reactstrap'
import Dashboard from './Dashboard'
import Customers from './Customers'
import Product from './Product'
import Payments from './Payment'
import Orders from './Orders'
import Sales from './Sales'
import CustomerDetails from './CustomerDetails'

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
