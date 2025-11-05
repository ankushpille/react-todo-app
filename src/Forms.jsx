import { useState } from "react";

function SimpleForm(){
  const [inputValue,setInputValue] = useState('')
  const [submitValue,setSubmittedvalue] = useState('')

  const handleInputValue = (e) => {
     setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedvalue(inputValue)
    setInputValue('')
  }
  

    return(
        <>
          <form onSubmit={handleSubmit}>

            <input
             type="text" 
             name="username" 
             id="username" 
             value = {inputValue}
             placeholder="enter your name"
             onChange={handleInputValue}
            
            />
            <button type="submit">Submit</button>
          </form>
         
         <p>{submitValue}</p>
        </>
    )

}

export default SimpleForm;