import {Tab, Tabs} from "react-bootstrap";
import CurrentTaskComponent from "./CurrentTaskComponent.jsx";
import CompleteTaskComponent from "./CompleteTaskComponent.jsx";

const TabsTaskComponent = (props) => {
    const {taskToDo,taskCompleted,editTask,deleteTask} = props;
    return (
        <Tabs
            defaultActiveKey="Pending"
            transition={false}
            className="mb-3"
        >
            <Tab eventKey="Pending" title="Task Pending">
                <CurrentTaskComponent taskToDo={taskToDo}
                                      taskCompleted={taskCompleted}
                                      editTask={editTask}
                                      deleteTask={deleteTask}/>
            </Tab>
            <Tab eventKey="Complete" title="Task Completed">
                <CompleteTaskComponent taskToDo={taskToDo}
                                       deleteTask={deleteTask}/>
            </Tab>
        </Tabs>
    );
}

export default TabsTaskComponent;