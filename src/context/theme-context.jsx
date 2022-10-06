import React, {useState, useMemo} from "react";

export const ActiveThemeContext = React.createContext([])

export function ActiveThemeProvider(props){
    const [isActive, setActive] = useState(true)

    function handleActiveTheme(){
        setActive(!isActive)
    }

    const value = useMemo( () => {
        return({
            isActive,
            handleActiveTheme,
        })
    },[isActive,handleActiveTheme])

    return <ActiveThemeContext.Provider value={value} {...props}/>
}

export function useTheme(){
    const context = React.useContext(ActiveThemeContext)
    if(!context){
        throw new Error ("useTheme debe estar dentro del provider ActiveTheme")
    }
    return context;
    
}  