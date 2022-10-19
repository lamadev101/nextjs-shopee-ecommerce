import React from 'react'

const Newslatter = () => {
  return (
    <div className='newsLetter'>
      <div className="left">
        <h2>Sign Up For Newsletters</h2>
        <p>Get E-mail updates about our lates shop and special offers.</p>
      </div>
      <div className="right">
        <input type="text" placeholder='Your email address' />
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newslatter