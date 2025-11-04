import React from 'react'

function Greeting(props){
    return(
        <>
          <h1>Hello {props.name} how are you doing?</h1>
        
        </>
    )
}

function PropsExample(){
    return (
     <Greeting name = "ankush" />

    )
}

export default PropsExample;