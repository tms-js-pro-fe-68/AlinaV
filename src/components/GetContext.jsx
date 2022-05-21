import { createContext, useContext } from "react";

const Context = createContext()

export const HomePageContext = () => useContext(Context)

export default function GetContext(children, context){
    return <Context.Provider value={{context}}>
        {children}
    </Context.Provider>
}