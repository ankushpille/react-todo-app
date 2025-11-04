function ListandKeys(){
     const itemList = [
        { id: 1, name: 'Apple' },
		{ id: 2, name: 'Banana' },
		{ id: 3, name: 'Orange' },
     ]

     return (
        <>
           {itemList.map(item => (
               <li key={item.id}>
                  {item.name}
               </li>
           ))}
        
        </>
     )
}

export default ListandKeys;