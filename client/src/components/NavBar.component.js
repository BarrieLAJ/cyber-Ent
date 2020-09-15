import React from 'react'
import {NavLink as Link, withRouter} from 'react-router-dom'

import { 
    Nav,
    NavItem,
    Row
} from 'reactstrap';

export const NavBar = withRouter(() => {
    return (
        <div className="navigation">
        {/* <Navbar color="dark" dark expand="md"> */}
            <Row>
            <Link className='my-brand' to='/'>Cyber Ent</Link>
            </Row>
            <Row lg="">
                <Nav vertical className="my-nav">
                    <Link to='/products'>
                    <NavItem color="white">
                        Products
                    </NavItem>
                    </Link>
                    <Link to='/customers'>
                    <NavItem>
                        Customers
                    </NavItem>
                    </Link>
                    <Link to='/orders'>
                    <NavItem>
                        Orders
                    </NavItem>
                    </Link>
                    <Link to='/payments'>
                    <NavItem>
                        Payment
                    </NavItem>
                    </Link>
                </Nav>
            </Row>
        {/* </Navbar> */}
        </div>
    )
});

