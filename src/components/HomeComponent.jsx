import NavComponent from "./NavComponent.jsx";
import ModalTaskComponent from "./ModalTaskComponent.jsx";
import TabsTaskComponent from "./TabsTaskComponent.jsx";

const HomeComponent = () => {

    return (
        <>
            <NavComponent/>
                <TabsTaskComponent/>
            <ModalTaskComponent/>
        </>
    )
}

export default HomeComponent