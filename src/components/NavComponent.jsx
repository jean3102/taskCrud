import {Button, Container, Navbar} from "react-bootstrap";

const NavComponent = ({handleShow}) => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container fluid>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
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