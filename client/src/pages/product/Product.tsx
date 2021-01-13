import React, { useState, useEffect, ReactNode } from 'react'
import {connect} from 'react-redux'
import {
    Row,
    Button,
    Table,
    }   from 'reactstrap'
import AddProductModal from './AddProductModal'

import {addProduct, getProducts, deleteProduct, updateProduct} from './productRedux/productActions'
import DeleteModal from '../../components/DeleteModal'


// const Product1  = (props: {type: number}) => {
//    const {type} = props;
// }
const Product = ({products,addProduct,getProducts,deleteProduct,updateProduct}) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const [name, setname] = useState("")
    const [type, settype] = useState('')
    const [unitCost, setUnitCost] = useState('')
    const [size, setsize] = useState('')
    const [isOpen, setisOpen] = useState(false)
    const [product_id, setproduct_id] = useState<string | null>(null)

    const toggle = () => {
        setmodalOpen(!modalOpen)
    }

    const toggleDeleteModal = () => {
        setisOpen(!isOpen)
    } 

    const handleDeleteProduct = (_id) => {
        deleteProduct(_id)
        setisOpen(false)
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
        <div style={{padding: "0.4em"}} className="text-white">
            <DeleteModal isOpen={isOpen} name='Product' id={product_id} handleDelete={handleDeleteProduct} toggle={toggleDeleteModal} />
            <Row>
                <h2>Products</h2>
            </Row>
            <Row>
                <Button block onClick={toggle} color="warning" className="my-2">Add Products</Button>
            </Row>
            <AddProductModal open={modalOpen} toggle = {toggle} setName={setname} setType={settype} setUnitCost={setUnitCost} setSize={setsize} name={name} type={type} unit_cost={unitCost} size={size} handleAddProduct={handleAddProduct} handleCancelProduct={handleCancelProduct} />
            {products.length > 0 &&
            <Row noGutters={false} className="my-2">
                <Table autoCapitalize="true" striped  dark borderless hover className="text-white">
                    <tr>
                        <th>No</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Type</th>
                        <th>Unit Cost</th>
                        <th>Size</th>
                        <th>Actions</th>
                    </tr>
                    <tbody>
                        {products.filter((product) => product.status !== 'deleted').map((product, i) =>{
                            return (
                                <tr key={product._id}>
                                    <th>{i+1}</th>
                                    <td>{product._id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.type}</td>
                                    <td>{product.unit_cost}</td>
                                    <td>{product.size}</td>
                                    <td><span><Button color="warning" size="sm" onClick={(e) => {
                                        // e.preventDefault()
                                        setproduct_id(product._id)
                                        console.log(product_id)
                                        toggleDeleteModal()
                                    }}>Edit</Button></span> <span><Button color="danger" size="sm" onClick={() => {
                                        // e.preventDefault()
                                        setproduct_id(product._id)
                                        console.log(product_id)
                                        toggleDeleteModal()
                                    }}>Delete</Button></span></td>
                                </tr>
                                )
                        })}
                    </tbody>
                </Table>
            </Row>
            }
            {!products.length && <p style={{margin: '0 auto', textAlign: 'center'}}>No Product Yet</p>}
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
    addProduct: addProduct,
    deleteProduct : deleteProduct,
    updateProduct: updateProduct
})(Product)
