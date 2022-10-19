import React from 'react'
import {Card, FilterBox} from '.'
import { useStateContext } from '../context/StateContext';

const Products = ({title, products}) => {
  const {choose} = useStateContext();
  // const color = ['red', 'green', 'blue', 'yellow', 'gray', 'white', 'black'];
  
  if(choose === "price low to high"){
    products.sort((a, b) => a.price - b.price);
  }
  if(choose === "price high to low"){
    products.sort((a, b) => b.price - a.price);
  }
  
  if(choose === "red"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "gray"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "green"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "yellow"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "white"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "black"){
    products = products.filter(({color})=> color === choose);
  }
  if(choose === "blue"){
    products = products.filter(({color})=> color === choose);
  }

  return (
    <div className={title ? 'products exp': 'products'}>
      {title && <><h1>{title}</h1>
      <p>summer collection new morden design</p></>}
      <FilterBox/>
      <div className="wrapper">
        {products.map((product, idx)=><Card key={idx} product={product}/>)}
      </div>
    </div>
  )
}

export default Products