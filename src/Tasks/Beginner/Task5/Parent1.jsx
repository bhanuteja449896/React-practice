import { useState } from "react"
import ChildButton1 from "./ChildButton1"
import ChildButton2 from "./ChildButton2"

export default function Parent1(){
    const [count,setCount] = useState(0)

    const handleCount=()=>{
        setCount(count+1)
    }

    const handleAlert=()=>{
        alert("Count is "+count)
        console.log(count)
    }

    return(
        <>
            <h1>Count : {count}</h1>
            <ChildButton1 count={count} handleCount={handleCount} />
            <ChildButton2 count={count} handleAlert={handleAlert} />
        </>
    )
}