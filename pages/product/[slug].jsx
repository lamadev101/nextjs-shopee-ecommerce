import Image from 'next/image'
import React, { useState } from 'react'
import tshirt1 from '../../public/img/products/f2.jpg'
import tshirt2 from '../../public/img/products/f1.jpg'
import tshirt3 from '../../public/img/products/f3.jpg'
import tshirt4 from '../../public/img/products/f4.jpg'

import {FilterBox, Products, Rating} from '../../components';
import { featuredProducts } from '../api/data';
import Link from 'next/link';
import { useStateContext } from '../../context/StateContext'
import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter();
  const data = router.query;

  const {qty, setQty, dispatch, state: {cart}} = useStateContext();
  const [image, setImage] = useState(null);

  console.log(image);

  const addToCart = ()=> {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: data.id,
        name: data.name,
        qty: 1,
        img: data.img,
        price: data.price
      }
    })
    setQty(prev=>prev+1);
  } 

  return (
    <div className='productDetail exp'>
      <Link href="/">Home </Link>/T-Shirt
      <div className="top">
        <div className="left">
          <div className="cardImage">
            {[tshirt1, tshirt2, tshirt3, tshirt4].map((tshirt, id)=>(
              <div className='imageBox' key={id} onMouseOver={()=>setImage(tshirt.src)}>
                <Image src={tshirt} alt=""/>
              </div>
            )
            )}
          </div>
          <div className="mainImage">
            <img src = {image ? image : data.img} alt="" />
          </div>
        </div>

        <div className="right">
          <h2>{data.name}</h2>
            <Rating/>
          <h2>$ {data.price}</h2>
          <div className='sizeQty'>
            <FilterBox option="show"/>
            <span>Quantity: <small>{qty} item(s) add to cart</small></span>
          </div>
          <p className='productStatus'>In Stock</p>
          <div className="cartBtn">
            {cart.some(p=>p.id === data.id) ? (
              <div className='twoBtn'>
                <button className="btn addMore" onClick={()=>{
                  dispatch({
                    type: 'REMOVE_FROM_CART',
                    payload: data.id
                  })
                  setQty(prev=>prev - 1)
                }}>Remove from Cart</button>
                
              </div>
            ):(
              <button className="btn addCart" onClick={addToCart}>Add to Cart</button>
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