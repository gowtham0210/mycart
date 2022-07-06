import React, {useState, useContext, createContext} from 'react'
import cartItems from "./data";

const Appcontext = createContext();

const AppProvider = ({children}) => { 
     const [cart, setCart] = useState(cartItems)

     return(
        <AppContext.Provider value={{cart}}>
        {children}
        </AppContext.Provider>
     )

}


function Context() {
  return (
    <div>Context</div>
  )
}

export default Context;