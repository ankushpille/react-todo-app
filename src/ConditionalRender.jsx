import { useState } from "react";

function ConditionalRender(){
    const [isLoggedin,setisLoggedin] = useState(false);

    const toggleLogin = () => {
        setisLoggedin(!isLoggedin)
    }

    return(
        <>
        {/* conditional render */}
        <button onClick={toggleLogin}>{isLoggedin ? 'logout' : 'login'}</button>

        {isLoggedin ? 'welcomeback' : 'please login'}
        {!isLoggedin ? 'please login' : 'logout'}
        <h1>testing </h1>
        </>
    )
}

export default ConditionalRender;