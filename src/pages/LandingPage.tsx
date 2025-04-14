import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <div className="overlay">
        <h1>Welcome to Paradise Nursery 🌿</h1>
        <p>Paradise Nursery is your trusted destination for nurturing green spaces and bringing the serenity of nature into every home. We specialize in curating a wide variety of houseplants — from aromatic herbs to medicinal wonders and ornamental beauties. Our mission is to make plant parenting simple, joyful, and accessible to all. Whether you’re a seasoned plant lover or just starting out, our thoughtfully selected collection, expert guidance, and eco-friendly philosophy will help you build your own personal paradise — one plant at a time.
            Find your perfect plant!</p>
        <Link to="/products">
          <button className="start-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
