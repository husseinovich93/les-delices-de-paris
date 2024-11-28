// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Home from './HomePage'; // Ensure this matches your folder structure
import Login from './Login';
import Signup from './Signup';
import About from './About';
import ContactUs from './ContactUs';
import Menu from './Menu';
import Checkout from './Checkout';
import Order from './OrderOnline';
import Receipt from './Receipt';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <nav>
            <ul className="nav-list">
              <div className="left-nav">
                <li>
                  <Link to="/" title="Return to Home">Home</Link>
                </li>
                <li>
                  <Link to="/menu" title="Explore our Menu">Browse & Order</Link>
                </li>
                <li>
                  <Link to="/about" title="Learn more About Us">About</Link>
                </li>
                <li>
                  <Link to="/contact-us" title="Contact Us">Contact</Link>
                </li>
              </div>
              <div className="right-nav">
                <li>
                  <Link to="/login" className="loginB" title="Log in to your account">Login</Link>
                </li>
                <li>
                  <Link to="/checkout" className="cartB" title="Proceed to Checkout">Checkout</Link>
                </li>
              </div>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/order" element={<Order />} />
            <Route path="/receipt" element={<Receipt />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
