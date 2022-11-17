import Link from 'next/link'
import React from 'react'

const Notice = () => {

  return (
    <div className='notice'>
      <p>Repair Services</p>
      <h1>Up to <span>60% Off</span> - All t-Shirts & Accessories</h1>
      <Link href="/shop">
        <button className='btn' >Explore More</button>
      </Link>
    </div>
  )
}

export default Notice