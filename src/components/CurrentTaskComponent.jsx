import {Button, ButtonGroup, Table} from "react-bootstrap";
import {useContext} from "react";
import {Task} from "../context/TaskContext.jsx";

const CurrentTaskComponent = () => {

    const {taskToDo, editTaskContext, deleteTaskContext, taskCompletedContext} = useContext(Task)
    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Options</th>
                </tr>
                </thead>


                {taskToDo?.filter(item => item.status === false).map((item, key) =>
                    <tbody key={key}>
                    <tr>
                        <td>{key + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td><ButtonGroup aria-label="Basic example">
                            <Button variant="outline-warning" onClick={() => editTaskContext(item.id)}>Edit</Button>
                            <Button variant="outline-success"
                                    onClick={() => taskCompletedContext(item.id)}>Complete</Button>
                            <Button variant="outline-danger" onClick={() => deleteTaskContext(item.id)}>Delete</Button>
                        </ButtonGroup></td>
                    </tr>
                    </tbody>
                )}
            </Table>

        </>
    )
}

export default CurrentTaskComponent