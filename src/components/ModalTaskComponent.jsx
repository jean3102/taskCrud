import {Button, Modal} from "react-bootstrap";
import {useRef, useState} from "react";
import FormModalTaskComponent from "./FormModalTaskComponent.jsx";

const ModalTaskComponent = (props) => {
    const {titleModal,show, handleClose, addTask,updateTask} = props
    return (
        <>
            <Modal show={show}
                   onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{titleModal}</Modal.Title>
                </Modal.Header>
                <FormModalTaskComponent
                    handleClose={handleClose}
                    addTask={addTask}
                    updateTask={updateTask}
                />
            </Modal>
        </>
    )
}

export default ModalTaskComponent