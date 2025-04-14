import React from 'react';
import '../styles/ProductCard.css';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  addToCart: () => void; // Changed from (id: number) => void to () => void
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  addToCart,
}) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>₹{price}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
