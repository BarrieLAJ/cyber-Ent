import React from 'react';
import { Container,  Col, Row} from 'reactstrap'
import {BrowserRouter} from 'react-router-dom'



import  { NavBar }  from './components/NavBar.component'
import {MainPage} from './components/MainPage.component'


import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
function App() {
  return (
    
      <BrowserRouter>
        <Container fluid>
          {/* <div className="App"> */}
            <Row className="pr-0 pl-1">
              <Col xs='2' className="pr-0 pl-1"><NavBar /></Col>
              <Col xs='10' className="pr-0 pl-1"><MainPage /></Col>
            </Row>
          {/* </div> */}
        </Container>
      </BrowserRouter>
    
  );
}

export default App;
