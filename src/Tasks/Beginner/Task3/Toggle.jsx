import { useState } from "react"
export default function Toggle(){
    const [visible,setVisible] = useState(true);
    const [buttonText, setButtonText] = useState("Hide");

    const handleVisible=()=>{
        setVisible(!visible)
        setButtonText(visible ? "show":"Hide")
    }

    return(
        <>
            {
                visible && (
                    <h1>This is an exmaple line for Toggle button</h1>
                )
            }
            <button onClick={handleVisible}>{buttonText}</button>
        </>
    )
}