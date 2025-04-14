import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import { store } from './redux/store'; // Import the store

function App() {
  return (
    <Provider store={store}> {/* Wrap the app in the Provider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
