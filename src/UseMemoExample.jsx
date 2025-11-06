import { useState,useMemo } from "react";

function UseMemoExample(){
     const [count,setCount] = useState(0);
     const [text,settext] = useState("")

     const expensiveCalculation = (num) => {
        for(let i=0; i<2000; i++){
            console.log("for loop triggered")
        }
        return num * 2
     }

     const doubledValue = useMemo(() => {
        console.log("usememo triggered")
        return expensiveCalculation(count);
     },[count])

     return(
        <>
        <input 
        type="text"
        value={text}
        onChange={(e) => settext(e.target.value)}
        placeholder="type something......"
        />

        <button onClick={() => setCount(prev => prev + 1)}>Click me</button>


        <p>count {count}</p>
        <p>doubledvalue {doubledValue}</p>
        </>
     )
}


export default UseMemoExample;
