import {createContext, useState} from "react";
import useAlertSuccess from "../hooks/useAlertSuccess.js";

export const Task = createContext(null)

const TaskContext = ({children}) => {
    const [taskToDo, setTaskToDo] = useState([])
    const [updateTask, setUpdateTask] = useState({})
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setTitleModal('Add Task')
        setShow(false);
    }

    const handleShow = () => setShow(true);
    const [titleModal, setTitleModal] = useState('Add Task')

    const addTaskContext = (task) => {
        //TODO Updated task  if the id exist
        if (task.id !== undefined) {
            const newArray = taskToDo.map(item => item.id === task.id
                ? {...item, id: task.id, title: task.title, description: task.description}
                : item)
            setTaskToDo(newArray)
            setUpdateTask({})
            useAlertSuccess('Your task has been updated')
        } else {
            //TODO create task  if id doesn't exist
            setTaskToDo([
                ...taskToDo, {id: taskToDo.length + 1, ...task}
            ])
            useAlertSuccess('Your task has been created')
        }
        handleClose()
    }
    const editTaskContext = (id) => {
        setTitleModal('Edit Task')
        handleShow()
        const newData = taskToDo.filter(item => item.id === id)
        setUpdateTask(newData[0])
    }

    const taskCompletedContext = (id) => {
        const newData = taskToDo.map(item => item.id === id
            ? {...item, status: true}
            : item)
        setTaskToDo(newData)
        useAlertSuccess('Your task has been done')
    }

    const deleteTaskContext = (id) => {
        const newData = taskToDo.filter(item => item.id !== id)
        setTaskToDo(newData)
        useAlertSuccess('Your task has been delete')
    }


    return (
        <Task.Provider value=
                           {{
                               taskToDo,
                               updateTask,
                               addTaskContext,
                               editTaskContext,
                               taskCompletedContext,
                               deleteTaskContext,
                               handleShow,
                               handleClose,
                               show,
                               titleModal
                           }}>
            {children}
        </Task.Provider>
    )
}

export default TaskContext