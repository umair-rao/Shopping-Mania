import React from 'react'
import {Link} from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className='text-xl bg-pink-300'>
      <div className='products'>
        <ul className="flex justify-around">
        <li className="mr-6">
    <Link className="text-black hover:text-red-800" to="/">Products</Link>
  </li>
  <li className="mr-6">
    <a className="text-black hover:text-red-800" href="/">Women's</a>
  </li>
  <li className="mr-6">
    <a className="text-black hover:text-red-800" href="/">Men's</a>
  </li>
  <li className="mr-6">
    <a className="text-black hover:text-red-800" href="/">Kid's</a>
  </li>
  <li className="mr-6">
    <a className="text-black hover:text-red-800" href="/">Accessories</a>
  </li>
  <li className="mr-6">
    <a className="text-black hover:text-red-800" href="/">Cosmetics</a>
  </li>
  <li className="mr-6">
    <Link className="text-black hover:text-white" to="/cart">Cart Item [{props.count}]</Link>
  </li>
</ul>
      </div>
    </div>
  )
}

export default Navbar