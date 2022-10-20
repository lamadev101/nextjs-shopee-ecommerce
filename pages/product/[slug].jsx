import Image from 'next/image'
import React, { useState } from 'react'
import tshirt1 from '../../public/img/products/f2.jpg'
import tshirt2 from '../../public/img/products/f1.jpg'
import tshirt3 from '../../public/img/products/f3.jpg'
import tshirt4 from '../../public/img/products/f4.jpg'

import {FilterBox, Products, Rating} from '../../components';
import { featuredProducts, newArraivalProducts } from '../api/data';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext'

const ProductDetails = () => {
  const {qty, setQty, clickedItem, setCartItems, cartItems} = useStateContext();
  const [image, setImage] = useState(null);

  const combineProducts =  featuredProducts.concat(newArraivalProducts);
  console.log(combineProducts);
  const product = combineProducts.filter(product => product.id === clickedItem);
  
  const addItems = ()=> setQty(prev=>prev+1);
  const addCartItems = ()=> {
    setCartItems([...cartItems, clickedItem]);
    setQty(next=>next+1);
  } 
  // const cartItem = cartItems?.filter((item) => item === clickedItem);

  return (
    <div className='productDetail exp'>
      <Link href="/">Home </Link>/T-Shirt
      <div className="top">
        <div className="left">
          <div className="cardImage">
            {[tshirt1, tshirt2, tshirt3, tshirt4].map((tshirt, id)=>(
              <div className='imageBox' key={id} onMouseOver={()=>setImage(tshirt)}>
                <Image src={tshirt} alt=""/>
              </div>
            )
            )}
          </div>
          <div className="mainImage">
            <Image src = {image ? image : product[0].img} objectFit="cover" layout='responsive' alt="" />
          </div>
        </div>

        <div className="right">
          <h2>{product[0].name}</h2>
            <Rating/>
          <h2>$ {product[0].price}</h2>
          <div className='sizeQty'>
            <FilterBox option="show"/>
            <span>Quantity: <small>{qty} item(s) add to cart</small></span>
          </div>
          <p className='productStatus'>In Stock</p>
          <div className="cartBtn">
            {qty >= 1 ? (
              <div className='twoBtn'>
                <button className="btn addMore" onClick={addItems}>Add More</button>
                <Link href="/cart">
                  <button className='btn checkoutNow'>Checkout Now</button>
                </Link>
              </div>
            ):(
              <button className="btn addCart" onClick={addCartItems}>Add to Cart</button>
            )}
          </div>
          <h1>Product Details</h1>
          <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cupiditate voluptate ea soluta tenetur, dolores, neque excepturi enim numquam, eum ex quo corporis quos sequi iste ducimus. Necessitatibus, incidunt dolores.</p>
        </div>
      </div>
      <div className="bottom">
        <Products title="Similar Products" products={featuredProducts} />
      </div>
    </div>
  )
}

export default ProductDetails