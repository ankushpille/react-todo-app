

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


function App() {

  const{value,handleToggle} = UseToggle(false)

  return (
    <>
     
     <button onClick={handleToggle}>
       {value ? 'hide message' : 'show message'}
      </button>
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
       {value ? 'hello ankush': 'this is customhookExample'}
       <Useeffectcleanup />

    </>
  )
}

export default App
