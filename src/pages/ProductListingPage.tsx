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
    category: string;
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

  const categories = [...new Set(plants.map((plant) => plant.category))];

  return (
    <div className="product-listing">
      <h2>Our Plants</h2>
      {categories.map((category) => (
        <div key={category} className="plant-category">
          <h3>{category}</h3>
          <div className="product-cards">
            {plants
              .filter((plant) => plant.category === category)
              .map((plant) => (
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
      ))}
    </div>
  );
};

export default ProductListingPage;
