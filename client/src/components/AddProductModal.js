import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Row, FormGroup, Label, Button} from 'reactstrap'

const AddProductModal = (props) => {
    return (
        <Modal isOpen={props.open} toggle={props.toggle} >
            <ModalHeader>
                Add Product
            </ModalHeader>
            <ModalBody>
                <Form className="mx-2 my-2">
                    <Row>
                        <FormGroup className="mx-1" onSubmit={(e)=> e.preventDefault()}>
                            <Label for="name">Name</Label>
                            <Input type="text"  name="name" id="name" placeholder="Name" value={props.name} onChange={(event)=>props.setName(event.target.value)} />
                        </FormGroup>
                        <FormGroup className="mx-1" >
                            <Label for="type">Type</Label>
                            <Input type="text"  name="type" id="type" placeholder="Type" vlaue={props.type} onChange={(event)=>props.setType(event.target.value)} />
                        </FormGroup>
                    </Row>
                    <Row>
                        <FormGroup className="mx-1">
                            <Label for="unit_cost">Unit Cost</Label>
                            <Input type="text"  name="unit_cost" id="unit_cost" placeholder="200.00" value={props.unit_cost} onChange={(event)=>props.setUnitCost(event.target.value)} />
                        </FormGroup>
                        <FormGroup className="mx-1">
                            <Label for="size">Size</Label>
                            <Input type="text"  name="size" id="size" placeholder="Size" value={props.size} onChange={(event)=>props.setSize(event.target.value)} />
                        </FormGroup>
                    </Row>
                </Form>
            </ModalBody>
            <ModalFooter>
                    <Button onClick={props.handleAddProduct} color="dark">Add Product</Button>{"  "}<Button onClick={props.handleCancelProduct} color="danger">Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}

export default AddProductModal
