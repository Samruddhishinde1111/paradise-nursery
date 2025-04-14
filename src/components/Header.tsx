import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import './Header.css';

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="plant">🌿</span> Paradise Nursery
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <div className="cart-icon">
          <Link to="/cart">🛒 Cart</Link>
          <div className="cart-count">{totalItems}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
