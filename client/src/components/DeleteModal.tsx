import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import { Interface } from 'readline'

interface Props {
    isOpen: boolean;
    name: string;
    id: string;
    handleDelete(id: string):void;
    toggle(): void;
}

export default function DeleteModal(props: Props) {
    const deletebtn = () => {
        props.handleDelete(props.id)
    }
    return (
       <Modal isOpen={props.isOpen} toggle={props.toggle}>
           <ModalHeader>Delete {props.name}</ModalHeader>
           <ModalBody>
               Are You Sure you want to delete this {props.name.toLowerCase()}
           </ModalBody>
           <ModalFooter>
                <Button color="danger" onClick={deletebtn}>Yes</Button>
                <Button color="success" onClick={props.toggle}>No</Button>
           </ModalFooter>
       </Modal>
    )
}






