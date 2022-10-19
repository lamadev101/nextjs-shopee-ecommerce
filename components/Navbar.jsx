import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../public/img/logo.png'
import {BsCart4} from 'react-icons/bs'
// import {GiHamburgerMenu} from 'react-icons/gi'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'

const Navbar = () => {
  // const [openSidebar, setOpenSidebar] = useState(false);
  const {qty, activeId, setActiveId} = useStateContext();

  const Tabs = [{navitem: "Home", link: "/"},{navitem: "Shop", link: "/shop"},{navitem: "Blog", link: "/blog"},{navitem: "About", link: "/about"},{navitem: "Contact", link: "/contact"},{navitem: <BsCart4 className='icon' />, link:"/cart"}]
  // const winWidth = window.innerWidth;

  return (
    <div className='navbar'>
      <Link href='/'>
        <Image src={logo} width="200" height="80" alt='logo'/>
      </Link>
      <div className='search'>
        <input type="search" placeholder='Search...' />
        <button className="btn">
          <AiOutlineSearch/>
        </button>
      </div>
      <div className="navItems">
        {Tabs.map(( tab, idx)=>
        <Link href={tab.link} key={idx}>
          <span className={activeId===idx ? "active" : "navItem"} onClick={()=>setActiveId(idx)}>{tab.navitem}</span>
        </Link>
        )}
        {qty >= 1 && <span className='cartBadge'>{qty}</span>}
      </div>
    </div>
  )
}

export default Navbar