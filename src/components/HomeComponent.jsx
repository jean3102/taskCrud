import NavComponent from "./NavComponent.jsx";
import {Col, Container, Row} from "react-bootstrap";
import ModalTaskComponent from "./ModalTaskComponent.jsx";
import CurrentTaskComponent from "./CurrentTaskComponent.jsx";
import CompleteTaskComponent from "./CompleteTaskComponent.jsx";

const HomeComponent = () => {

    return (
        <>
            <NavComponent/>

            <Container fluid id="body">
                <Row className="justify-content-lg-center">
                    <Col lg={10} md={10} xl={6} sm={12} xs={12}>
                        <Row>
                            <Col lg={6} md={6} xl={6} sm={12} xs={12} >
                                <h3>Task Pending</h3>
                                <br/>
                                <CurrentTaskComponent/>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12}>
                                <h3>Task Complete</h3>
                                <br/>
                                <CompleteTaskComponent/>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </Container>
            <ModalTaskComponent/>
        </>
    )
}

export default HomeComponent