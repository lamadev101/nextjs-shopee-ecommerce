import Image from 'next/image'
import Link from 'next/link';
import { BsCart4} from 'react-icons/bs'
import { useStateContext } from '../context/StateContext';
import Rating from './Rating';

const Card = ({product}) => {
  const {setQty, clickedItem, setClickedItem, setActiveId} = useStateContext();

  const handleClicked = () =>{ 
    setClickedItem(product.id);
    setActiveId(null);
    // console.log("Product Id: ", product.id);
    // console.log(clickedItem);
  }
  
  return (
    <div className='card' onClick={handleClicked}>
        <Link href={`/product/${product.id}`}>
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
            <span className='cart'><BsCart4 onClick={()=>setQty(prev=>prev+1)} /></span>
          </div>
        </div>
      </div>
  )
}

export default Card