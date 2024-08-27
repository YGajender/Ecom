import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Home';
import './Home.css';

function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className='Header'>
      <h1>LOGO</h1>
      <ul>
        <li>
          <Link to="/">HOME</Link> 
        </li>
        <li>
          <Link to="/cart">CART</Link>
          <span>{cartCount}</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
