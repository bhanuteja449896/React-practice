import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
import Header from "./Header";

export default function HomePage(){
    const {theme,ToggleTheme} = useContext(ThemeContext)

    const styles = {
        backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
        color: theme === "light" ? "#000000" : "#ffffff",
        minHeight: "100vh",
        padding: "20px" 
    }

    return(
        <div style={styles}>
            <button onClick={ToggleTheme}>{theme==='light'? 'Dark':'Light' } Mode</button>
            <Header/>
            <p>This is a theme toggle example using Context API.</p>
        </div>
    )
}