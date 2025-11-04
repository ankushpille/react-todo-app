import { useEffect, useState } from "react";

function UseEffectExample(){
    const [count,setCount] = useState(0);
    const[message,setMessage] = useState('');

      useEffect(() => {
         if(count === 0){
            setMessage('you have not yet clicked the button');
         }else{
            setMessage(`you have clicked the button ${count} times`)
         }
      })

     const handleClick = () => {
        setCount(count + 1)
     }

     return (
        <>
          <p style={{color: 'blue'}}>{message}</p>
          <button onClick={handleClick}>click me</button>
        
        </>
     )
}

export default UseEffectExample;