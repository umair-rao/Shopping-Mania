import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { fetchProductDetail } from '../Redux/ProductList';
import ItemList from './ItemList';

const Products = (props) => {
  const sendData = useSelector((state) => state.productDetail);
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( fetchProductDetail())
  },[])

  return (
    <div className="data-section2">
      <div className="container flex flex-wrap">
        {sendData.productDetail?.map((item) => (
          <ItemList
          key={item.id}
            data={item}
            handleClick={props.handleClick}
          />
        )) }
      </div>
    </div>
  )
}

export default Products
