import './App.css'
import HomeComponent from "./components/HomeComponent.jsx";
import TaskContext from "./context/TaskContext.jsx";
function App() {
    return (
        <>
           <TaskContext>
               <HomeComponent/>
           </TaskContext>
        </>

    )
}

export default App
