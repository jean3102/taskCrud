import {Button, Container, Navbar} from "react-bootstrap";
import {useContext} from "react";
import {Task} from "../context/TaskContext.jsx";

const NavComponent = () => {
    const {handleShow} = useContext(Task)
    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Task Crud</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <Button variant="success" onClick={handleShow}>+Add Task</Button>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavComponent