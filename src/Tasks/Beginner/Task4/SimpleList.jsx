// Input adds items; display with map/keys. Lists/keys.

import { useState } from "react"

export default function SimpleList(){
    const [items,setItems] = useState(["item1","item2","item3"])
    const [newItem,setNewItem] = useState("");
    
    const handleAddButton=()=>{
        if (newItem !== ""){
            setItems([...items,newItem])
            setNewItem("")
            console.log(items)
        }else{
            alert("Empty input not allowed")
            console.log("Empty input not allowed")
        }
    }

    return(
        <>
            <h1>Hello</h1>
            <ul>
                {
                    items.map((item,index)=>(
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <input  onChange={e=>setNewItem(e.target.value)} value={newItem} type="text" placeholder="Enter item" /> <br /> <br />
            <button onClick={handleAddButton}>Add Item</button>
        </>
    )
}