import {Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";
import {useContext} from "react";
import {Task} from "../context/TaskContext.jsx";

const CurrentTaskComponent = () => {
    const {taskToDo,editTaskContext,deleteTaskContext,taskCompletedContext} = useContext(Task)
    return (
        <Row xs={2} md={2} className="g-4">
            {taskToDo?.filter(item => item.status === false).map((item,key)=>
                <Col xs={12} md={4} className="g-4" key={key}>
                    <Card style={{width: '18rem'}}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Text>
                                {item.description}
                            </Card.Text>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="outline-warning" onClick={() => editTaskContext(item.id)}>Edit</Button>
                                <Button variant="outline-success" onClick={()=>taskCompletedContext(item.id)}>Complete</Button>
                                <Button variant="outline-danger" onClick={()=>deleteTaskContext(item.id)}>Delete</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>)}
        </Row>
    )
}

export default CurrentTaskComponent