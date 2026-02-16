import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";

export default function Header(){
    const {theme} = useContext(ThemeContext);
    const headerStyle = {
        padding: "10px",
        marginTop: "20px",
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        color: theme === "light" ? "#000" : "#fff"
    };
    return(
        <div style={headerStyle}>
            <h2>Header Component</h2>
            <p>Current theme: {theme}</p>
        </div>
        
    )
}