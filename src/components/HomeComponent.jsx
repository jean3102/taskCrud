import NavComponent from "./NavComponent.jsx";
import { Col, Container, Row } from "react-bootstrap";
import ModalTaskComponent from "./ModalTaskComponent.jsx";
import CurrentTaskComponent from "./CurrentTaskComponent.jsx";
import CompleteTaskComponent from "./CompleteTaskComponent.jsx";

const HomeComponent = () => {

    return (
        <>
            <NavComponent />

            <Container fluid>
                <br /><br />
                <Row className="justify-content-center">
                    <Col lg={10} md={10} xl={6} sm={12} xs={12}>
                        <Row>

                            <Col style={styleCol}><h3>Task Pending</h3>
                                <CurrentTaskComponent />
                            </Col>

                        </Row>
                        <br/>
                        <Row>
                            <Col style={styleCol}><h3>Task Complete</h3>
                                <CompleteTaskComponent />
                            </Col>
                        
                        </Row>
                    </Col>
                </Row>

            </Container>
            <ModalTaskComponent />
        </>
    )
}

const styleCol = {with:'100%', overflowY: 'auto', color:'red'}


export default HomeComponent