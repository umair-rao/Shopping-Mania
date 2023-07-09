import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from './ProductList'
import cartReducer from './addToCart';

const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    cart: cartReducer,
  },
});

export default store;
