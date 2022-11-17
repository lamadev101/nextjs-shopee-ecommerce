import Image from 'next/image'
import Link from 'next/link';
import { BsCart4} from 'react-icons/bs'
import {MdOutlineRemoveShoppingCart} from 'react-icons/md'
import { useStateContext } from '../context/StateContext';
import Rating from './Rating';

const Card = ({product}) => {
  const {setQty, dispatch, state: {cart}} = useStateContext();

  const addToCart = ()=>{
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        img: product.img,
        price: product.price,
        name: product.name,
        qty: 1
      }
    })
    setQty(prev=>prev+1);
  }


  const removeFromCart = ()=>{
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: product
    })
    setQty(prev=>prev-1)
  }

  
  return (
    <div className='card'>
        <Link href={{
          pathname: `/product/${product.id}`,
          query: {
            id: product.id,
            img: product.img.src,
            name: product.name,
            price: product.price
          }
        }}>
        <div className="image">
          <Image src={product.img} layout="responsive" alt='' />
        </div>
        </Link>
        <div className="info">
          <span className='brand'>adidas</span>
          <h3>{product.name}</h3>
          <Rating/>
          <div className='priceCart'>
            <span className='price'>$ {product.price}</span>
            <span className='cart'>
              {cart.some(p=>p.id === product.id) ? <MdOutlineRemoveShoppingCart className='removeIcon' onClick={removeFromCart}/>:<BsCart4 onClick={addToCart} className="addIcon" />}
            </span>
          </div>
        </div>
      </div>
  )
}

export default Card