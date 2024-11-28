// src/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password123") {
      alert("Logged in successfully!");
      navigate("/"); // Navigate to the dashboard after login
    } else {
      alert("Invalid credentials!");
    }
  };


  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
          <p className="signup-link">
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </form>
      </div>
    </div>
  );
};


export default Login;
