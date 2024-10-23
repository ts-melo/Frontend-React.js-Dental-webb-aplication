import { createContext} from "react"
import { trat_list } from "../assets/img2"

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const contextValue = {
        trat_list
    }
    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider