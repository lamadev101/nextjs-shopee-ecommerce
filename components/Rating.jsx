import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'

const Rating = () => {
  return (
    <div>
        {[0, 1, 2, 3, 4].map((id)=><BsFillStarFill className='star' key={id} />)}
    </div>
  )
}

export default Rating