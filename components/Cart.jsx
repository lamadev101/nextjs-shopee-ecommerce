import Link from 'next/link'
import React from 'react'
import {BsCart4} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext';

const Cart = ({qty}) => {
  const {setActiveId} = useStateContext();

  return (
    <Link href="/cart">
      <div className='cartBox' onClick={()=>setActiveId(5)}>
        <div className='cartItems'>
          <span >{qty}</span>
        </div>
        <BsCart4 className='cartIcon' />
        <small>Open Now</small>
      </div>
    </Link>
  )
}

export default Cart