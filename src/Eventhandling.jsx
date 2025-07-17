

function Eventhandling(){

    const handleclick = () => {
        console.log("button clicked")
    }

    return(
        <>
        {/*event handling */}
          <button onClick={handleclick}>click me</button>
        </>
    )
}

export default Eventhandling;