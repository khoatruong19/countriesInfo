import {useContext, createContext, useState} from "react"

const RegionContext = createContext()

export const RegionContextProvider = ({children}) => {
    const [region,setRegion] = useState("")

    return (
        <RegionContext.Provider value= {{region, setRegion}}>
            {children}
        </RegionContext.Provider>
    )
}


export const useRegionContext = () => (useContext(RegionContext))