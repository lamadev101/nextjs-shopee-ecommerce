import React, { useEffect, useState } from 'react'
import {AiOutlineCloseCircle, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Rating } from '../components'
import { useStateContext } from '../context/StateContext'
import { BsCart4 } from 'react-icons/bs'
import Link from 'next/link'

const Cart = () => {
  const {qty, setQty, dispatch, state: {cart}} = useStateContext();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(()=>{
    setTotalPrice(
      cart.reduce((acc, curr)=>acc + Number(curr.price)*curr.qty, 0)
    );
  })
  return (
    <div className='cart exp'>
      {qty >= 1 ? <div className="wrapper">
        <div className="cartItems">
          {cart.map(c=>{
            return(
              <div className="cartItem" key={c.id}>
                <div className="image">
                  <img src={c.img.src || c.img} alt="" />
                </div>
                <div className='middle'>
                  <h3>{c.name}</h3>
                  <p>Size: xl</p>
                  <p>Color: black</p>
                </div>
                <div className='right'>
                  <Rating/>
                  <h3>Cost: $ {c.price}</h3>
                  <span className='incDecBtn'>
                    <AiOutlineMinus className="oprator" onClick={()=>dispatch({
                      type: 'CHANGE_QTY',
                      payload: {id: c.id, qty: c.qty-1}
                    })} />
                    <span>{c.qty}</span>
                    <AiOutlinePlus className='oprator' onClick={()=>dispatch({
                      type: 'CHANGE_QTY',
                      payload: {id: c.id, qty: c.qty+1}
                    })}/>
                  </span>
                </div>
                <AiOutlineCloseCircle className='icon' onClick={()=>{
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: c,
                  })
                  setQty(prev=> prev - 1)
                }}/>
              </div>
            )
          })}
        </div>
        <div className="checkOut">
          <h3>Chekout Section</h3>
          <div className="container">
            <ul className="left">
              <li>Sub Total :</li>
              <li>Shipping Charge :</li>
              <hr />
              <li>Total: </li>
            </ul>
            <ul className="right">
              <li>$ {totalPrice.toFixed(2)}</li>
              <li>$ 10</li>
              <hr />
              <li>$ {(totalPrice + 10).toFixed(2)}</li>
            </ul>
          </div>
        </div>
      </div>: 
      <div className='emptyCart'>
        <BsCart4 className='icon'/>
        <h1>Your cart is Empty</h1>
        <Link href="/shop">
          <button className='btn'>Visit Shop</button>
        </Link>
      </div>}
    </div>
  )
}

export default Cart