import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import { ShoppingCart, Store, User as UserIcon, LogOut } from 'lucide-react';
import Home from './pages/Home';
import Login from './pages/Login';
import CartPage from './pages/CartPage';
import Success from './pages/Success';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null); // Global user state

  // Persistent Cart Logic
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('sg_cart');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('sg_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error("Backend connection error:", err));
  }, []);

  const handleLogout = () => {
    setUser(null); // Clear user state
    alert("Signed out successfully!");
  };

  return (
    <Router>
      <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#EAEDED' }}>

        {/* Navigation Bar */}
        <nav style={{
          backgroundColor: '#131921',
          padding: '10px 5%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing: 'border-box'
        }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Store color="#FF9900" size={30} /> Grocify
          </Link>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>

            {/* Dynamic User Section */}
            <div style={{ color: 'white', cursor: 'pointer' }}>
              {user ? (
                <div onClick={handleLogout} style={{ textAlign: 'left' }}>
                  <span style={{ fontSize: '12px', color: '#ccc' }}>Hello, {user.username}</span> <br />
                  <span style={{ fontWeight: 'bold', color: '#FF9900' }}>Sign Out</span>
                </div>
              ) : (
                <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
                  <span style={{ fontSize: '12px', color: '#ccc' }}>Hello, Sign in</span> <br />
                  <span style={{ fontWeight: 'bold' }}>Account</span>
                </Link>
              )}
            </div>

            {/* Cart Link */}
            <Link to="/cart" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ position: 'relative' }}>
                <ShoppingCart size={32} />
                <span style={{
                  position: 'absolute', top: '-5px', right: '-5px',
                  backgroundColor: '#FF9900', color: '#131921',
                  borderRadius: '50%', padding: '2px 6px',
                  fontSize: '12px', fontWeight: 'bold'
                }}>
                  {cart.length}
                </span>
              </div>
              <span style={{ fontWeight: 'bold' }}>Cart</span>
            </Link>
          </div>
        </nav>

        {/* Page Routing */}
        <Routes>
          <Route path="/" element={<Home products={products} cart={cart} setCart={setCart} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} products={products} />} />
          <Route path="/success" element={<Success setCart={setCart} />} />
        </Routes>
      </div>
      <footer style={{
        backgroundColor: '#232f3e',
        color: 'white',
        padding: '40px 5%',
        marginTop: '50px',
        textAlign: 'center'
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
          <div>
            <h4 style={{ color: '#FF9900' }}>Get to Know Us</h4>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>About SmartGrocery</p>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Careers</p>
          </div>
          <div>
            <h4 style={{ color: '#FF9900' }}>Connect with Us</h4>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Facebook</p>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Twitter</p>
          </div>
          <div>
            <h4 style={{ color: '#FF9900' }}>Let Us Help You</h4>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Your Account</p>
            <p style={{ fontSize: '14px', cursor: 'pointer' }}>Help Center</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #3a4553', paddingTop: '20px', fontSize: '12px' }}>
          © 2026, SmartGrocery.com, Inc. or its affiliates
        </div>
      </footer>
    </Router>
  );
}

export default App;