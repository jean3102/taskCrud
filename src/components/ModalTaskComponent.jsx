import {Button, Modal} from "react-bootstrap";
import {useContext, useRef, useState} from "react";
import FormModalTaskComponent from "./FormModalTaskComponent.jsx";
import {Task} from "../context/TaskContext.jsx";

const ModalTaskComponent = () => {
    const {show,handleClose,titleModal} = useContext(Task)

    return (
        <>
            <Modal show={show}
                   onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <FormModalTaskComponent/>
            </Modal>
        </>
    )
}

export default ModalTaskComponent