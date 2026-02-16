import { createContext,useState,useEffect } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({children}){
    const [theme,setTheme] = useState('light')

    const ToggleTheme=()=>{
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(()=>{
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme){
            setTheme(savedTheme)
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('theme',theme)
    },[theme])

    return(
        <ThemeContext.Provider value={{ToggleTheme,theme}}>
            {children}
        </ThemeContext.Provider>
    )

}