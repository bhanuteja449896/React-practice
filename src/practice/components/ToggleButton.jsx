import { useState } from "react";

export default function ToggleButton(){
    const [show,setShow] = useState(true);

    return (
        <div>
            <button onClick={() => setShow(!show)}>Toggle</button>
            {/* {show && <p>Hello</p>} */}
            {show ? <p>Hello</p> : null}
        </div>
    );
}