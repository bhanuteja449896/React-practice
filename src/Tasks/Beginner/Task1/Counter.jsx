import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const handleIncrement=()=>{
        setCount(c=> c+1)
    }

    const handleDecrement=()=>{
        if(count<=0){
            alert("Count cannot be negative")
            console.log("count cannot be negative")
            setCount(c=>0)
        }else{
            setCount(c=>c-1)
        }
    }

    return(
        <>
        <h1>Count: {count}</h1><br />
        <button onClick={handleIncrement}>Increase</button>
        <button onClick={handleDecrement}>Decrease</button>
        </>
    );
}

export default Counter;