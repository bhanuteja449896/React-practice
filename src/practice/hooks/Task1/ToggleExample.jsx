// Task 1 – Simple boolean hook
// Question:
// Create useToggle custom hook that manages a boolean state with toggle().


import { useToggle } from "./UseToggle";

export default function CustomHooks(){
    const [isOpen,toggleOpen] = useToggle(False);

    return(
        <>
            <button onClick={toggleOpen}>{isOpen ? "Close" : "Open"}</button>
        </>
    )

}