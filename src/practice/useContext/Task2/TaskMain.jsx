import { useState } from "react";
import ThemeContext from './ThemeContext'
import ThemeButton from "./ThemeButton";


export default function TaskMain(){
    return(
        <ThemeContext.Provider value = "dark" >
            <ThemeButton/>
        </ThemeContext.Provider>
    )
}
