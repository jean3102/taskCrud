import {Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {Task} from "../context/TaskContext.jsx";

const CompleteTaskComponent = () => {
    const {taskToDo,deleteTaskContext} = useContext(Task)
    return (
        <Row xs={2} md={2} className="g-4">
            {taskToDo?.filter(item => item.status === true).map((item, key) =>
                <Col xs={12} md={4} className="g-4" key={key}>
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-danger" onClick={()=>deleteTaskContext(item.id)}>Delete</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>)}
        </Row>
    )
}

export default CompleteTaskComponent