import React, { createContext, useContext, useReducer, useState } from 'react'
import { cartReducer } from './cartReducer';
const Context = createContext();

const StateContext = ({children}) => {

  const [state, dispatch ] = useReducer(cartReducer, {
    cart: [],
  })

  const arr = [...Array(3)];
  const [activeId, setActiveId] = useState(0);

 const [qty, setQty] = useState(0);


 const [choose, setChoose] = useState("");

 const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <Context.Provider value={{state, dispatch, arr, qty, setQty, choose, setChoose, openSignUp, setOpenSignUp, openLogin, setOpenLogin, activeId, setActiveId}}>
      {children}
    </Context.Provider>
  )
}

export default StateContext
export const useStateContext = ()=> useContext(Context);