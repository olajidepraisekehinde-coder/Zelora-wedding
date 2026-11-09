import React, { createContext, useState } from 'react'

export const themeContext = createContext()
export default function ThemeProvider({children}) {
    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }
    return (
        <themeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}
