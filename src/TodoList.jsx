import './App.css'
import { useState } from 'react'

export default function TodoList(){
  const [text,setText] = useState('')
  const [inputValue,setInputvalue] = useState([])

   const handlechange = (e) => {
    setText(e.target.value)
   }

   const handleOnclick = () => {
     setInputvalue([...inputValue,text])
   }

   console.log("inputvalue",inputValue)

    return (

        <>
        <div className='container'> 
        <h1>TodoList</h1>
        <input type="text" onChange={handlechange}/>
        <button id="addButton" onClick={handleOnclick}>Add</button>
         <ul>
            {inputValue.map((text,index) => (
                 <li key={index}>{text}</li>
            ))}
         </ul>
          
        </div>

        
        </>
    )
}