import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Header.css';

const Header = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0);

  return (
    <header className="header">
      <h2 className="logo">🌿 Paradise Nursery</h2>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
