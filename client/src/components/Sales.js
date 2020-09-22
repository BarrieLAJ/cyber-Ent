import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { 
    Collapse, 
    Button, 
    Form, 
    FormGroup, 
    Input, 
    Label, 
    Row, 
    Col,  
    Badge,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter} from 'reactstrap';


import {getProducts} from '../actions/productActions'
// import { addPayment } from '../actions/paymentActions'
import {addCustomer, getCustomers} from '../actions/customerActions'
import {addOrder, getOrders} from '../actions/ordersActions'
import {addPayment} from '../actions/addCustomerAction'


const Sales = (props) => {
    const [isOpen, setisOpen] = useState(false);
    const [modalOpen, setmodalOpen] = useState(false);
    const [quantity, setquantity] = useState(1)
    const [product, setproduct] = useState(props.products[0]._id)
    const [cusname, setcusname] = useState('')
    const [cusaddress, setcusaddress] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [amount, setamount] = useState(0)
    const [payment_type, setpayment_type] = useState("Cash")
    const [balance, setbalance] = useState(0)

    useEffect(() => {
        props.getProducts()
    },[])



    const toggle = () => {setisOpen(!isOpen)}
    const toggleModal = () => {setmodalOpen(!isOpen)}
    const handleSubmit =  (e) => {
        e.preventDefault()
        toggle();
    }

    const handlePaymentSubmit = (e) => {
        e.preventDefault();
        setmodalOpen(true)
    }

    // const placeOrderNCustomer = async (orderData, customerData) =>{
    //     await props.addOrder(orderData)
    //     await props.addCustomer(customerData)
    //     await props.getOrders()
    //     await props.getCustomers()
    // }

    const handleConfirmPayment = async () => {
        let orderData = {
            total_cost: (+props.products.find((currentProduct,i)=> currentProduct._id === product).unit_cost) * (+quantity),
            quantity: +quantity,
            product_id: product
        }
        let customerData = {
            name: cusname,
            address: cusaddress,
            phone_number: phoneNumber
        }

        let payment = {
            amount: +amount,
            balance: +balance,
            payment_type: payment_type,

        }

        props.addPayment(orderData, customerData, payment)

        // setTimeout(() => { 
        //     placeOrderNCustomer(orderData, customerData)
        //     .then(async()=> {
        //         let paymentData = {
        //             amount: +amount,
        //             balance: +balance,
        //             payment_type: payment_type,
        //             customer_id:  props.customers[props.customers.length-1]._id,
        //             order_id: props.orders[props.orders.length-1]._id
        //         }
        //         await props.addPayment(paymentData)
        //     })
        // }, 1000);


        setproduct(props.products[0]._id)
        setquantity(1)
        setcusname('')
        setcusaddress('')
        setphoneNumber('')
        setamount('')
        setpayment_type('')
        setmodalOpen(false)
        setisOpen(false)
    }

    const handleCancelPayment = () => {
        setproduct(props.products[0]._id)
        setquantity(1)
        setcusname('')
        setcusaddress('')
        setphoneNumber('')
        setamount('')
        setpayment_type('')
        setmodalOpen(false)
        setisOpen(false)
    }





    return (
        <div style={{padding: "1em 0.5em"}} className="text-white">
        <Row>
            <Col xs='12'><h3 className="heading-1">Order Product</h3></Col>
        </Row>
        <Form onSubmit={handleSubmit}>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="product">Product Name Type Size</Label>
            <Input type="select" value={product} onChange={(e)=>setproduct(e.target.value)} name="product" id="product" placeholder="product">
                {props.products.map(({_id,name,type,size,unit_cost}) =>{
                    return(<option key={_id} value={_id}> {name + ' ' + type + ' ' + size}</option>)
                })}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input type="number" name="quantity" value={quantity} onChange={(e)=>setquantity(e.target.value)} id="quantity" placeholder="Quantity" />
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" style={{ marginBottom: '1rem' }}> {isOpen ? "Close Order" : "Order"}</Button>
    </Form>
        

      <Collapse isOpen={isOpen}>
        <Row>
            <Col xs='12'><h3 className="heading-1">Make Payment</h3></Col>
        </Row>
        <Form onSubmit={handlePaymentSubmit}>
            <h4>Customer Details</h4>
            <Row>
                <Col md={4}>
                    <FormGroup>
                        <Label for='cusname'>Name</Label>
                        <Input type='text' name="cusname" id="cusname" onChange={(e)=>setcusname(e.target.value)} value={cusname}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for='phoneNumber'>Phone Number</Label>
                        <Input type='text' name="phoneNumber" id="phoneNumber" onChange={(e)=>setphoneNumber(e.target.value)} value={phoneNumber}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for='cusaddress'>Addreess</Label>
                        <Input type='text' name="cusaddress" id="cusaddress" onChange={(e)=>setcusaddress(e.target.value)} value={cusaddress}/>
                    </FormGroup>
                </Col>
            </Row>
            <h4>Payment Details</h4>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" value={amount} onChange={(e)=>setamount(e.target.value)} />     
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="payment_type">Payment Type</Label>
                        <Input type="text" name="payment_type" id="payment_type" value={payment_type} onChange={(e)=>setpayment_type(e.target.value)} />     
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <FormGroup>
                    <Label for="balance">Balance</Label>
                    <Input type="text" name="balance" id="balance" value={balance} onChange={(e)=>setbalance(e.target.value)} />     
                </FormGroup>
            </Row>
            <Row>
                <Col>
                    <h5 className="heading-3">Total</h5>
                </Col>
                <Col>
                <h5 className="heading-3">
                    <Badge color="info" size="lg">{(+props.products.find((currentProduct,i)=> currentProduct._id === product).unit_cost) * (+quantity)}</Badge>
                </h5>
                </Col>
            </Row>
            
            <Button block>Check Out</Button>
        </Form>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>Confirm Payment</ModalHeader>
            <ModalBody>
                <p>Payment will be made by <span>{cusname}</span></p>
                <p>For <span>{props.products.find((currentProduct,i)=> currentProduct._id === product).name}</span>  <span>{props.products.find((currentProduct,i)=> currentProduct._id === product).type}</span>
                </p>
                <p>Costing LE<span>{(+props.products.find((currentProduct,i)=> currentProduct._id === product).unit_cost) * (+quantity)}</span></p>
                <p>Paynig by {payment_type}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="dark" onClick={handleConfirmPayment}>Confirm</Button> {" "} <Button onClick={handleCancelPayment} color="danger">Cancel</Button>
            </ModalFooter>
        </Modal>
      </Collapse>
        </div>
    )
}
const mapStateToProps = (state) => ({
    products: state.products.products,
    orders: state.orders.orders,
    customers: state.customers.customers
})

export default connect(mapStateToProps, {
    getProducts: getProducts,
    addOrder: addOrder,
    addCustomer: addCustomer,
    getCustomers,
    getOrders,
    addPayment
})(Sales)
