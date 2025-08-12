import './App.css'
import { useState } from 'react'

export default function TodoList(){
  const [text,setText] = useState('')

   const handlechange = (e) => {
    setText(e.target.value)
   }

   const handleOnclick = (e) => {
    setText(e.target.value)
   }

    return (

        <>
        <div className='container'> 
        <h1>TodoList</h1>
        <input type="text" onChange={handlechange}/>
        <button id="addButton" onClick={handleOnclick}>Add</button>
         <h1>{text}</h1>
          
        </div>

        
        </>
    )
}