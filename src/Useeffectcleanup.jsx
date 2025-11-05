import { useEffect, useState } from "react";

function Useeffectcleanup(){
    const [data,setData] = useState('');
    const [loading,isLoading] = useState('');

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal

        console.log("fetching data...")
        isLoading(true);

        fetch("https://jsonplaceholder.typicode.com/todos/1", {signal})
        .then(response => response.json())

        .then(data => {
            setData(data);
            isLoading(false);
        })

        .catch((error) => {
            if(error.name === 'AbortError'){
                console.log('Fetch aborted')
            }else{
                console.log('fetch error',error);
            }
        })

        return(() => {
            console.log("aborted")
            controller.abort();
        })
    },[])

    return(
        <>
          {loading && <p>Loading data....</p>}

          {data && <p>{data.title}</p>}
        
        </>
    )
}

export default Useeffectcleanup;