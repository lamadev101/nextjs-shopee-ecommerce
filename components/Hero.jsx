import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useStateContext } from '../context/StateContext'
import heroBanner from '../public/img/banner.png'

const Hero = () => {
  const {setActiveId} = useStateContext();
  
  return (
    <div className='hero exp'>
      <div className="left">
        <p>Trade-in-offer</p>
        <h2>Super value deals</h2>
        <h1>On all Products</h1>
        <p>Save more with cupons & up to 60% off!!</p> <br />
        <Link href="/shop">
          <button className='btn' onClick={()=>setActiveId(1)}>Shop Now</button>
        </Link>
      </div>
      <div className="right">
        <Image src={heroBanner} alt="hero banner"/>
      </div>
    </div>
  )
}

export default Hero