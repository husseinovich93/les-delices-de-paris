// src/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css'

const Signup = () => {
    const [firtName, setfirstName] = useState('');
    const [lastName, setlasttName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would send these details to an API to create a new user
        alert("Account created successfully!");
        navigate("/login"); // Redirect to login after successful signup
    };

    return (
        <div className="signup-container">
          <div className="signup-box">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your First name"
                  value={firtName}
                  onChange={(e) => setfirstName(e.target.value)}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="lasttName">Last Name</label>
                <input
                  type="text"
                  id="lasttName"
                  name="lasttName"
                  placeholder="Enter your Last name"
                  value={lastName}
                  onChange={(e) => setlasttName(e.target.value)}
                  required
                />
              </div>
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
              <button type="submit" className="signup-btn">Sign Up</button>
            </form>
          </div>
        </div>
      );
};

export default Signup;