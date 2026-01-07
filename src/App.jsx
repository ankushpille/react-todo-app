

// import HelloWorld from './HelloWorld'
// import Props from './Props'
// import UseStateExample from './UseStateExample'
// import ConditionalRender from './ConditionalRender'
// import ListkeysExample from './ListKeys'
// import Eventhandling from './Eventhandling'
import ConditionalRendering from "./ConditionalRender"
import Eventhandling from "./Eventhandling2"
import HelloWorld from "./HelloWorld"
import ListandKeys from "./ListandKeys"
import PropsExample from "./PropExample"
import UsestatePractice from "./UsestatePractice"
import UseEffectExample from "./UseEffectExample1"
import SimpleForm from "./Forms"
import Useeffectcleanup from "./Useeffectcleanup"
import UseToggle from "./useToogle"
import WindowSizeDisplay from "./useWindowSize"
import UseMemoExample from "./UseMemoExample"
import UseEffectExample1 from "./UseEffectExampl1"
import Counter from '../Counter'
import Counter1 from './Counter1'
import { TodoList1 } from "./TodoList1"


function App() {

  const{value,handleToggle} = UseToggle(false)

  return (
    <>
     
     {/* <button onClick={handleToggle}>
       {value ? 'hide message' : 'show message'}
      </button> */}
      {/* <Props/> */}
       {/* <UseStateExample/> */}
       {/* <ConditionalRender/> */}
       {/* <ListkeysExample/> */}
       {/* <Eventhandling/> */}
       {/* <TodoList/> */}
       {/* <HelloWorld />
       <PropsExample />
       <UsestatePractice />
       <ConditionalRendering />
       <ListandKeys />
       <Eventhandling />
       <UseEffectExample/>
       <SimpleForm /> */}
       {/* {value ? 'hello ankush': 'this is customhookExample'} */}
       {/* <Useeffectcleanup />
       <WindowSizeDisplay/>
       <UseMemoExample /> */}
       {/* <UseEffectExample1/> */}
       {/* <Counter/> */}
       <h1>Welcome to ankush counter app for practice</h1>
       {/* <Counter1 /> */}
       <TodoList1/>

    </>
  )
}

export default App
