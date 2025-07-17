function ListkeysExample(){
    const items = [
        {id:1,name:"ankush"},
        {id:2,name:"laxmi"},
        {id:2,name:"madhu"}
    ]

    return(
       <>
         <ul>
           {items.map((item) => (
            <li>{item.id}{item.name}</li>
           ))}
            
         </ul>
       </>
    )
}

export default ListkeysExample