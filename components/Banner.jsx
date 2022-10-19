import React from 'react'

const Banner = () => {
  return (
    <div className='banner exp'>
      <div className="top">
        <div className="left">
          <p>crazy deals</p>
          <h1>buy 1 get 1 free</h1>
          <p className='tag'>The best classic dress is on sale at cara</p>
          <button className="btn">Explore More</button>
        </div>
        <div className="right">
          <p>spring/summer</p>
          <h1>upcomming season</h1>
          <p className='tag'>The best classic dress is on sale at cara</p>
          <button className="btn">Collection</button>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h1>SEASONAL SALE</h1>
          <p>Winter collection - 50% OFF</p>
        </div>
        <div className="middle">
          <h1>NEW FOOTWARE COLLECTION</h1>
          <p>Spring/Summer-2022</p>
        </div>
        <div className="right">
          <h1>T-SHIRT</h1>
          <p>New Trendy Prints</p>
        </div>
      </div>
    </div>
  )
}

export default Banner