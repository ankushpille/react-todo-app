import { useState } from "react";

function Eventhandling() {
  const [message, setMessage] = useState("click the button");

  const handleClick = () => {
    setMessage((prev) => 
       prev === 'click the button' ? 'button clicked' : 'click the button'
    )
  };

  return (
    <>
       <p>{message}</p>
      <button onClick={handleClick}>click me</button>

    </>
  );
}

export default Eventhandling;
