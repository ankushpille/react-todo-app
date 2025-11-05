import { useState } from "react";

function UseToggle(){
    const[value,setValue] = useState(false);
    
    const handleToggle = () => {
        setValue((prev) => !prev)
    }
    

    return [value,handleToggle]
}

export default UseToggle;