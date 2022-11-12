import {Button, ButtonGroup, Card, Col, Row} from "react-bootstrap";

const CurrentTaskComponent = (props) => {
    const {taskToDo,taskCompleted,editTask,deleteTask} = props;
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
                                <Button variant="outline-warning" onClick={() => editTask(item.id)}>Edit</Button>
                                <Button variant="outline-success" onClick={()=>taskCompleted(item.id)}>Complete</Button>
                                <Button variant="outline-danger" onClick={()=>deleteTask(item.id)}>Delete</Button>
                            </ButtonGroup>
                        </Card.Body>
                    </Card>
                </Col>)}
        </Row>
    )
}

export default CurrentTaskComponent