import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../Redux/addToCart';


const CartTotalComponent = ({navIncrement, navDecrement}) => {
  const cartTotalItems = useSelector((state) => state.cart.cartItems);
  // console.log(cartTotalItems);

  const dispatch = useDispatch();
  const decrementQunaity = (item) => {
    dispatch(decrement(item, item.id));
    navDecrement()
  };

  const incrementQunaity = (item) => {
    dispatch(increment(item, item.id));
    navIncrement()
  };


  return (
    <div>
      {cartTotalItems.map((item, index) => (
        <div className='flex flex-col items-center pt-10 space-y-2' key={index}>
          <img className='w-32 h-32' src={item.image} alt='Product_Image' />
          <h1>Product: {item.title.slice(0, 40)}</h1>
          <h1>Rating: {item.rating.rate}</h1>
          <h1>Price: {item.price * item.quantity} $</h1>
          <div className='flex items-center'>
            <h1 className='pr-4'>Quantity:</h1>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-3 rounded-l' onClick={() => decrementQunaity(item)}>-</button>
            <p className='pr-3 pl-3'>{item.quantity}</p>
            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-2 rounded-l' onClick={() => incrementQunaity(item)}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartTotalComponent;
