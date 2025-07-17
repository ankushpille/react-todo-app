import { useState } from "react";


function UseStateExample(){
    const [count,setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return(
        <>
         <button onClick={handleClick}>Click here</button>
         <h1>{count}</h1>
        </>
    )
}

export default UseStateExample;