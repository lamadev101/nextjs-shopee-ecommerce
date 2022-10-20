import Image from 'next/image'
import React from 'react'
import item from '../public/img/products/f1.jpg'
import {AiOutlineCloseCircle, AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import { Rating } from '../components'
import { useStateContext } from '../context/StateContext'
import { BsCart4 } from 'react-icons/bs'
import Link from 'next/link'

const Cart = () => {
  const {qty, setQty, totalPrice, setTotalPrice} = useStateContext();
  setTotalPrice(qty*89.00);
  
  return (
    <div className='cart exp'>
      {qty >= 1 ? <div className="wrapper">
        <div className="cartItems">
          <div className="cartItem">
            <div className="image">
              <Image src={item} alt="" />
            </div>
            <div className='middle'>
              <h3>Product 1</h3>
              <p>Size: xl</p>
              <p>Color: black</p>
              <span className='incDecBtn'>
                Quantity:
                <AiOutlineMinus className={qty <= 1 ? 'disable' : 'oprator'} onClick={()=>setQty(prev=>prev-1)} />
                <span>{qty}</span>
                <AiOutlinePlus className='oprator' onClick={()=>setQty(prev=>prev+1)}/>
              </span>
            </div>
            <div className='right'>
              <Rating/>
              <h3>Cost: $ {89.00 * qty}</h3>
            </div>
            <AiOutlineCloseCircle className='icon'/>
          </div>
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
              <li>$ {totalPrice}</li>
              <li>$ 5.00</li>
              <hr />
              <li>$ {totalPrice + 5.00}</li>
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