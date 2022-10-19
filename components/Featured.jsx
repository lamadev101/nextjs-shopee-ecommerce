import Image from 'next/image'
import React from 'react'
import { features } from '../pages/api/data'

const Featured = () => {
  return (
    <div className='featured exp'>
      {features.map(feature =>(
        <div key={feature.id} className="card">
          <Image src={feature.img} alt=""/>
          <button style={{backgroundColor: feature.color }}>{feature.text}</button>
        </div>
      ))}
    </div>
  )
}

export default Featured