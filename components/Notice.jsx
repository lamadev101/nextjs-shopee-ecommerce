import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'

const Notice = () => {
  const {setActiveId} = useStateContext();

  return (
    <div className='notice'>
      <p>Repair Services</p>
      <h1>Up to <span>60% Off</span> - All t-Shirts & Accessories</h1>
      <Link href="/shop">
        <button className='btn' onClick={()=> setActiveId(1)}>Explore More</button>
      </Link>
    </div>
  )
}

export default Notice