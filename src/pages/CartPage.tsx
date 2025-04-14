import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import { RootState } from '../redux/store';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id)); // Action to remove an item
  };

  const handleIncrease = (id: string) => {
    dispatch(updateQuantity({ id, quantity: 1 })); // Action to increase quantity
  };

  const handleDecrease = (id: string) => {
    dispatch(updateQuantity({ id, quantity: -1 })); // Action to decrease quantity
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty! <Link to="/products">Start shopping</Link></p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.imageUrl} alt={item.name} />
                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => handleDecrease(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrease(item.id)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
            <div className="cart-buttons">
              <Link to="/products" className="continue-shopping-btn">Continue Shopping</Link>
              <button className="checkout-btn">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
