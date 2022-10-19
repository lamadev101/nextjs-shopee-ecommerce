import Head from 'next/head';
import React from 'react'
import {Navbar, Footer, Newslatter, Cart, Announcement} from "../components";
import { useStateContext } from '../context/StateContext';

const Layout = ({children}) => {
  const {qty, activeId} = useStateContext();
  return (
    <>
      <Head>
        <title>Shopee</title>
        <meta name="description" content="E-commerce application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Announcement/>
      <Navbar/>
      {children}
      <Newslatter/>
      {qty>=1 && activeId !== 5 && <Cart qty={qty}/>}
      <Footer/>
    </>
  )
}

export default Layout