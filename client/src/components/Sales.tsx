import React, {useState, useEffect} from 'react'
import {connect,useDispatch,useSelector} from 'react-redux'
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


import {getProducts} from '../pages/product/productRedux/productActions'
// import { addPayment } from '../actions/paymentActions'
import {addCustomer} from '../pages/customer/customerRedux/customerActions'
import {addtheOrder, gettheOrders} from '../pages/order/orderRedux/ordersActions'
import {addPayment} from '../actions/addCustomerAction'
import { Product } from '../pages/product/productInterface';
import { activeProductSelector } from '../pages/product/productSelectors';



const Sales = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => activeProductSelector(state))
    const [isOpen, setisOpen] = useState(false);
    const [modalOpen, setmodalOpen] = useState(false);
    const [quantity, setquantity] = useState<number>(1)
    const [product, setproduct] = useState(products.length ? products[0]._id : "2435")
    const [total_cost, settotal_cost] = useState(0)
    const [cusname, setcusname] = useState('')
    const [cusaddress, setcusaddress] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [amount, setamount] = useState(0)
    const [payment_type, setpayment_type] = useState("Cash")
    const [balance, setbalance] = useState(0)

    useEffect(() => {
        dispatch(getProducts())
    },[])



    const toggle = () => {setisOpen(!isOpen)}
    const toggleModal = () => {setmodalOpen(!isOpen)}
    const handleSubmit =  (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        toggle();
    }

    const handlePaymentSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setmodalOpen(true)
    }


    const handleConfirmPayment = async () => {
        let orderData = {
            total_cost: (+products.find((currentProduct: Product,i: number)=> currentProduct._id === product).unit_cost) * (+quantity),
            quantity: +quantity,
            product: product
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

        dispatch(addPayment(orderData, customerData, payment))



        setproduct(products[0]._id)
        setquantity(1)
        setcusname('')
        setcusaddress('')
        setphoneNumber('')
        setamount(0)
        setpayment_type('Cash')
        setmodalOpen(false)
        setisOpen(false)
        settotal_cost(0)
        setbalance(0)
    }

    const handleCancelPayment = () => {
        setproduct(products[0]._id)
        setquantity(1)
        setcusname('')
        setcusaddress('')
        setphoneNumber('')
        setamount(0)
        setpayment_type('Cash')
        setmodalOpen(false)
        setisOpen(false)
        settotal_cost(0)
        setbalance(0)
    }





    return (
        <div style={{padding: "1em 0.5em"}} className="text-white">
        <Row>
            <Col xs='12'><h3 className="heading-1">Order Product</h3></Col>
        </Row>
        {products.length > 0 &&
        <div>
        <Form onSubmit={handleSubmit}>
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="product">Product Name Type Size</Label>
            <Input type="select" value={product} onChange={(e: { target: { value: any; }; })=>{
                setproduct(e.target.value)
                settotal_cost((+products.find((currentProduct: Product,i: any)=> currentProduct._id === e.target.value).unit_cost) * (+quantity))
                // setbalance(total_cost - amount)
            }} name="product" id="product" placeholder="product">
                {products.map(({_id,name,type,size}: Product) =>{
                    return(<option key={_id} value={_id}> {name + ' ' + type + ' ' + size}</option>)
                })}
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="quantity">Quantity</Label>
            <Input type="number" name="quantity" value={quantity} onChange={(e: { target: { value: string | number | ((prevState: number) => number); }; })=>{
                setquantity(+e.target.value)
                settotal_cost((+products.find((currentProduct:Product,i: number)=> currentProduct._id === product).unit_cost) * (+e.target.value))
                // setbalance(total_cost-amount)
            }} id="quantity" placeholder="Quantity" />
          </FormGroup>
        </Col>
      </Row>
      <Button color="primary" style={{ marginBottom: '1rem' }}> {isOpen ? "Close Order" : "Order"}</Button>
    </Form>
    
     {products &&
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
                        <Input type='text' name="cusname" id="cusname" onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>setcusname(e.target.value)} value={cusname}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for='phoneNumber'>Phone Number</Label>
                        <Input type='text' name="phoneNumber" id="phoneNumber" onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>setphoneNumber(e.target.value)} value={phoneNumber}/>
                    </FormGroup>
                </Col>
                <Col md={4}>
                    <FormGroup>
                        <Label for='cusaddress'>Addreess</Label>
                        <Input type='text' name="cusaddress" id="cusaddress" onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>setcusaddress(e.target.value)} value={cusaddress}/>
                    </FormGroup>
                </Col>
            </Row>
            <h4>Payment Details</h4>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="amount">Amount</Label>
                        <Input type="text" name="amount" id="amount" value={amount} onChange={(e: { target: { value: string | number | ((prevState: number) => number); }; })=>{
                            setamount(+e.target.value)
                            setbalance(total_cost - (+e.target.value))
                            }} />     
                    </FormGroup>
                </Col>
                <Col>
                    <FormGroup>
                        <Label for="payment_type">Payment Type</Label>
                        <Input type="text" name="payment_type" id="payment_type" value={payment_type} onChange={(e: { target: { value: React.SetStateAction<string>; }; })=>setpayment_type(e.target.value)} />     
                    </FormGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FormGroup>
                        <Label for="balance">Balance</Label>
                        <Input disabled type="text" name="balance" id="balance" value={balance} />     
                    </FormGroup>
                </Col>
            </Row>
            <Row border>
                <Col>
                    <h5 className="heading-3">Total</h5>
                </Col>
                <Col>
                <h5 className="heading-3">
                    <Badge color="info" size="lg">{products.length > 0 ? (+products.find((currentProduct: Product,i: number)=> currentProduct._id === product).unit_cost) * (+quantity) : 0}</Badge>
                </h5>
                </Col>
            </Row>
            
            <Button block color='success'>Check Out</Button>
        </Form>
        <Modal isOpen={modalOpen} toggle={toggleModal}>
            <ModalHeader>Confirm Payment</ModalHeader>
            <ModalBody>
                <p>Payment will be made by <span>{cusname}</span></p>
                <p>For <span>{products.find((currentProduct: { _id: any; },i: any)=> currentProduct._id === product).name}</span>  <span>{products.find((currentProduct: Product,i: number)=> currentProduct._id === product).type}</span>
                </p>
                <p>Payment Amount LE<span>{amount}</span></p>
                {+balance > 0 && <p>Balance LE<span>{balance}</span></p>}
                <p>Paynig by {payment_type}</p>
            </ModalBody>
            <ModalFooter>
                <Button color="dark" onClick={handleConfirmPayment}>Confirm</Button> {" "} <Button onClick={handleCancelPayment} color="danger">Cancel</Button>
            </ModalFooter>
        </Modal>
      </Collapse>
    }
      </div>
        }
        </div>
    )
}


export default Sales

