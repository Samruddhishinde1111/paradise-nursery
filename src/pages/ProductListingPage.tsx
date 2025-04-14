import React from 'react';
import ProductCard from '../components/ProductCard';
import { plants } from '../data/plants';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../styles/ProductListingPage.css';

const ProductListingPage: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant: {
    id: number;
    name: string;
    price: number;
    image: string;
  }) => {
    dispatch(
      addToCart({
        id: plant.id.toString(),
        name: plant.name,
        price: plant.price,
        imageUrl: plant.image,
        quantity: 1,
      })
    );
  };

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      <div className="product-cards">
        {plants.map((plant) => (
          <ProductCard
            key={plant.id}
            name={plant.name}
            price={plant.price}
            image={plant.image}
            addToCart={() => handleAddToCart(plant)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
