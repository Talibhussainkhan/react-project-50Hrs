import { createContext, useState } from "react";


export const themeContext = createContext();


export const ThemeContextProvider = ({ children })=>{
    
    const [theme, setTheme] = useState('light')

    const value = {
        theme, setTheme
    }

    return (
        <themeContext.Provider value={value}>
            { children }
        </themeContext.Provider>
    )
}

