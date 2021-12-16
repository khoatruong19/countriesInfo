import {useContext, createContext, useState} from "react"

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [dark, setDark] = useState(false)

    return (
        <ThemeContext.Provider value= {{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useThemeContext = () => (useContext(ThemeContext))