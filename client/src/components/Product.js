import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import {
    Row,
    Button,
    Table,
    }   from 'reactstrap'
import AddProductModal from './AddProductModal'

import {addProduct, getProducts} from '../actions/productActions'

const Product = ({products,addProduct,getProducts}) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [name, setname] = useState("")
    const [type, settype] = useState('')
    const [unitCost, setUnitCost] = useState('')
    const [size, setsize] = useState('')

    const toggle = () => {
        setmodalOpen(!modalOpen)
    }

    const handleAddProduct = () => {
        let newProduct = {
            name,
            type,
            unit_cost: parseInt(unitCost),
            size
        }
        addProduct(newProduct)
        setmodalOpen(false)
        setname('')
        settype('')
        setUnitCost('')
        setsize('')
    }
    const handleCancelProduct = () => {
        setmodalOpen(false)
        setname('')
        settype('')
        setUnitCost('')
        setsize('')
    }

    useEffect(()=>{
        getProducts()
    })
    return (
        <div style={{padding: "1em 0.5em"}} className="text-white">
            <Row>
                <h2>Products</h2>
            </Row>
            <Row>
                <Button block onClick={toggle} color="warning" className="my-2">Add Products</Button>
            </Row>
            <AddProductModal open={modalOpen} setName={setname} setType={settype} setUnitCost={setUnitCost} setSize={setsize} name={name} type={type} unit_cost={unitCost} size={size} handleAddProduct={handleAddProduct} handleCancelProduct={handleCancelProduct} />
            <Row noGutters={false} className="my-2">
                <Table autoCapitalize="true" striped  dark borderless hover className="text-white">
                    <tr>
                        <th>No</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Unit Cost</th>
                        <th>Size</th>
                    </tr>
                    <tbody>
                        {products.map((product, i) =>{
                            return (
                                <tr key={product._id}>
                                    <th>{i+1}</th>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.unit_cost}</td>
                                    <td>{product.size}</td>
                                </tr>
                                )
                        })}
                    </tbody>
                </Table>
            </Row>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products.products
    }
}



export default connect(mapStateToProps, {
    getProducts: getProducts,
    addProduct: addProduct
})(Product)
