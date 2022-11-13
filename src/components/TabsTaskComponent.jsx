import {Container, Tab, Tabs} from "react-bootstrap";
import CurrentTaskComponent from "./CurrentTaskComponent.jsx";
import CompleteTaskComponent from "./CompleteTaskComponent.jsx";

const TabsTaskComponent = () => {
    return (
        <Tabs
            defaultActiveKey="Pending"
            transition={false}
            className="mb-3"
        >
            <Tab eventKey="Pending" title="Task Pending">
                <Container fluid id="body">
                <CurrentTaskComponent/>
                </Container>

            </Tab>
            <Tab eventKey="Complete" title="Task Completed">
                <CompleteTaskComponent/>
            </Tab>
        </Tabs>
    );
}

export default TabsTaskComponent;