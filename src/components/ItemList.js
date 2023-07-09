import { useState } from 'react';
import addCart from '../images/addCart.png'
import { addToCart } from '../Redux/addToCart'
import { useDispatch } from 'react-redux';


const ItemList = ({ data, handleClick}) => {

  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

    const handleAddToCart = (product) => {
      dispatch(addToCart(product));
      setMessage('Product is added to cart'); 
      setTimeout(() => {
        setMessage('');
      }, 1000);
    };

  const whenClick = () => {
    handleClick()
    handleAddToCart(data)
  }

  return (
    <div>
      <div className="image w-64 px-14 pt-10">
        <img className='w-40 h-32' src={data.image} alt="..."></img>
        <h3>{data.title.slice(0, 18)}</h3>
        <img className='cursor-pointer' src={addCart}  onClick={whenClick} alt='...'></img>
        </div>
        <div className="pl-11 .bg-green-300">
        {message && <p>{message}</p>}
        </div>
    </div>
  )
}

export default ItemList

  