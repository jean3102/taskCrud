import NavComponent from "./NavComponent.jsx";
import {Container} from "react-bootstrap";
import {useState} from "react";
import ModalTaskComponent from "./ModalTaskComponent.jsx";
import Swal from "sweetalert2";
import TabsTaskComponent from "./TabsTaskComponent.jsx";
import useAlertSuccess from "../hooks/useAlertSuccess.js";

const HomeComponent = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setTitleModal('Add Task')
        setUpdateTask({})
        setShow(false);
    }
    const handleShow = () => setShow(true);
    const [titleModal, setTitleModal] = useState('Add Task')

    const [taskToDo, setTaskToDo] = useState([])
    const [updateTask, setUpdateTask] = useState({})

    const addTask = (task) => {
        //TODO Updated task  if the id exist
        if (task.id !== undefined) {
            const newArray = taskToDo.map(item => item.id === task.id
                ? {...item, id: task.id, title: task.title, description: task.description}
                : item)
            setTaskToDo(newArray)
            setUpdateTask({})
            handleClose()
            useAlertSuccess('Your task has been updated')
        } else {
            //TODO create task  if id doesn't exist
            setTaskToDo([
                ...taskToDo, {id: taskToDo.length + 1, ...task}
            ])
            useAlertSuccess('Your task has been created')
        }
    }

    const editTask = (id) => {
        setTitleModal('Edit Task')
        handleShow()
        const newData = taskToDo.filter(item => item.id === id)
        setUpdateTask(newData[0])
    }

    const taskCompleted = (id) => {
        const newData = taskToDo.map(item => item.id === id
            ? {...item, status: true}
            : item)
        setTaskToDo(newData)
        useAlertSuccess('Your task has been done')
    }

    const deleteTask = (id) => {
        const newData = taskToDo.filter(item => item.id !== id)
        setTaskToDo(newData)
        useAlertSuccess('Your task has been delete')
    }


    return (
        <>
            <NavComponent handleShow={handleShow}/>
            <Container fluid id="body">
                <TabsTaskComponent taskToDo={taskToDo}
                                   taskCompleted={taskCompleted}
                                   editTask={editTask}
                                   deleteTask={deleteTask} />
            </Container>
            <ModalTaskComponent titleModal={titleModal}
                                updateTask={updateTask}
                                addTask={addTask}
                                show={show}
                                handleClose={handleClose}/>
        </>
    )
}

export default HomeComponent
