import { useState } from "react";

export default function Counter(){
    const[count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1);
    }

    return(
        <>
          <h1>Hello basic button</h1>

          <button onClick={handleClick}>click me to increase count</button>
          
          {count}
        </>
    )
}