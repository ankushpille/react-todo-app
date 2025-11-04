import { useState } from "react";

function UsestatePractice(){
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return(
        <>
          <button onClick={handleClick} style={{color: 'black', backgroundColor: 'red'}}>click me</button>
          <p>here is the {count} count</p>
        </>
    )
     
}

export default UsestatePractice;