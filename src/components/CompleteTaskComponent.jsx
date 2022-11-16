import {Button, ButtonGroup, Table} from "react-bootstrap";
import {useContext} from "react";
import {Task} from "../context/TaskContext.jsx";

const CompleteTaskComponent = () => {

    const {taskToDo, deleteTaskContext} = useContext(Task)
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


                {taskToDo?.filter(item => item.status === true).map((item, key) =>
                    <tbody key={key}>
                    <tr>
                        <td>{key + 1}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td><ButtonGroup aria-label="Basic example">
                            <Button variant="outline-danger" onClick={() => deleteTaskContext(item.id)}>Delete</Button>
                        </ButtonGroup></td>
                    </tr>
                    </tbody>
                )}
            </Table>
        </>
    )
}

export default CompleteTaskComponent