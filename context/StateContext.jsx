import React, { createContext, useContext, useState } from 'react'
const Context = createContext();

const StateContext = ({children}) => {
  const arr = [1, 2,3];
  const [activeId, setActiveId] = useState(0);

 const [qty, setQty] = useState(0);
 const [cartItems, setCartItems] = useState([
  // {
  //   id: "",
  //   name: "",
  //   price: "",
  //   color: "",
  //   size: "",
  //   qty: "",
  //   img: "",
  // }
 ]);
 const [price, setPrice] = useState(0);
 const [totalPrice, setTotalPrice] = useState(0);

 const [choose, setChoose] = useState("");
 const [clickedItem, setClickedItem] = useState(0);

 const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  return (
    <Context.Provider value={{arr, qty, setQty, cartItems, setCartItems, price, setPrice, choose, setChoose, openSignUp, setOpenSignUp, openLogin, setOpenLogin, totalPrice, setTotalPrice, clickedItem, setClickedItem, activeId, setActiveId}}>
      {children}
    </Context.Provider>
  )
}

export default StateContext
export const useStateContext = ()=> useContext(Context);