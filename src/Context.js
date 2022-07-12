import React, {useState,useReducer, useContext, createContext} from 'react'
import cartItems from "./data";
import reducer from './reducer';

const AppContext = createContext();
const initialstate = {
    loading:false,
    cart: cartItems,
    total:0,
    amount:0,
}

const AppProvider = ({children}) => { 
     const [state, dispatch] = useReducer(reducer, initialstate);

     return(
        <AppContext.Provider value={{...state}}>
        {children}
        </AppContext.Provider>
     )

}



export const useGlobalContext =() => {
    return useContext(AppContext)
}

export {AppContext, AppProvider};