import Image from 'next/image'
import React from 'react'
import logo from '../public/img/logo.png'
import appleStore from '../public/img/pay/app.jpg'
import googlePlay from '../public/img/pay/play.jpg'
import payment from '../public/img/pay/pay.png'

const Footer = () => {
  return (
    <div className='footer exp'>
      <div className="left">
        <Image src={logo} width="200" height={80} alt=""/>
        <h5>Contact</h5>
        <div className="contact">
          <p><span>Address: </span>Lorem ipsum dolor sit amet consectetur.</p>
          <p><span>Phone: </span>Lorem ipsum dolor sit amet consectetur.</p>
          <p><span>Hours: </span>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <h5>Follow Us</h5>
        
      </div>
      <div className="middle">
        <div className="left">
          <h5>About</h5>
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="right">
          <h5>My Account</h5>
          <ul>
            <li>Sign In</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <h5>Install App</h5>
        <p>From App Store or Google Play</p>
        <Image src={appleStore} alt="apple store" className='payment'/>
        <Image src={googlePlay} alt="google play" className='payment'/>
        <p>Secured Payment Gateways</p>
        <Image src={payment} alt="payment gateways"/>
      </div>
    </div>
  )
}

export default Footer