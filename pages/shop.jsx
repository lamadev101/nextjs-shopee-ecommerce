import React from 'react'
import {Products} from '../components'
import { featuredProducts, newArraivalProducts } from './api/data'

const Shop = () => {
  const combineProducts = featuredProducts.concat(newArraivalProducts);
  return (
    <div className='shop'>
      <div className="pageBanner">
        <h1>#stayHome</h1>
        <p>save more with cupons & up to 70% off</p>
      </div>
      <div className="product">
        <Products products={combineProducts}/>
      </div>
    </div>
  )
}

export default Shop