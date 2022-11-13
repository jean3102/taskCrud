import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Modal} from "react-bootstrap";
import {useContext, useRef, useState} from "react";
import {Task} from "../context/TaskContext.jsx";

const FormModalTaskComponent = () => {

    const {updateTask,handleClose,addTaskContext} = useContext(Task)

    const initialTask = updateTask.id === undefined ? {title: '', description: '', status: false} : updateTask
    const [task, setTask] = useState(initialTask)
    const titleInput = useRef(null)
    const descriptionInput = useRef(null)


    const handleChange = ({target}) => {
        setTask({
            ...task,
            [target.name]: target.value
        })
    }


    const inputValidation = () => {
        let status = true;
        if (task.title === '') {
            titleInput.current.style.border = '1px solid red'
            status = false
        } else {
            titleInput.current.style.border = '1px solid #ced4da'
        }
        if (task.description === '') {
            descriptionInput.current.style.border = '1px solid red'
            status = false
        } else {
            descriptionInput.current.style.border = '1px solid #ced4da'
        }

        return status
    }

    const submit = (e) => {
        e.preventDefault()
        if (!inputValidation()) return
        //TODO validate if exist id for updated task
        if (updateTask.id !== undefined) {
            addTaskContext(updateTask)
            addTaskContext({...updateTask, ...task})
        } else {
            addTaskContext(task)
        }
        setTask(initialTask)
    }
    return (
        <Form onSubmit={submit}>
            <Modal.Body>
                <Form.Group className="mb-3"
                            controlId="formBasicEmail"
                >
                    <Form.Label>Title</Form.Label>
                    <Form.Control name="title"
                                  type="text"
                                  placeholder="type title"
                                  ref={titleInput}
                                  value={task.title}
                                  onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
                <Form.Group className="mb-3"
                            controlId="formBasicEmail">
                    <Form.Label>description</Form.Label>
                    <Form.Control name="description"
                                  type="text"
                                  placeholder="type description"
                                  ref={descriptionInput}
                                  value={task.description}
                                  onChange={(e) => handleChange(e)}
                    />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                        onClick={handleClose}>
                    Close
                </Button>
                <Button type="submit"
                        variant="primary">
                    Save Changes
                </Button>
            </Modal.Footer>
        </Form>
    );
}

export default FormModalTaskComponent;