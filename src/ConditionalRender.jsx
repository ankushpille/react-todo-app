import { useState } from "react";

function ConditionalRendering() {
  const [isLoggedIn, setisLoggedIn] = useState(false);

  const handleLoggedIn = () => {
    setisLoggedIn(!isLoggedIn);
  };

  return(
    <>
       <button onClick={handleLoggedIn}>{isLoggedIn ? 'logout' : 'login'}</button>
    </>
  )
}

export default ConditionalRendering;
