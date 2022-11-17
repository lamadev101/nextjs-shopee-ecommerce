import Link from 'next/link'
import React from 'react'
import {BsCart4} from 'react-icons/bs'

const Cart = ({qty}) => {

  return (
    <Link href="/cart">
      <div className='cartBox' >
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