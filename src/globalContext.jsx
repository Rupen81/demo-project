import { createContext, useState } from "react";


export const Context = createContext({});

function GlobalContext({ children }){
    const[searchText, setSearchText] = useState("");
    console.log('searchText ', searchText )
    return(
        <Context.Provider value={{searchText, setSearchText}}>
            {children}
        </Context.Provider>
    )

}

export default GlobalContext;