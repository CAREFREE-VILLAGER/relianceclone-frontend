import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; 
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../../Components/Navbar/Navbar'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://reliance-clone-backend.onrender.com/login', {
        email,
        password,
      });
      
      console.log('Login Successful', response.data);
      alert(response.data.message);
      
      
      localStorage.setItem('loggedInEmail', email);
      
      
      navigate('/', { state: { email } });
      
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Login Error:', error);
      setError('Please Check Your Credentials');
    }
  };

  return (
    <div>
      <Navbar /> 

      <div className="page-decoration">
        
        <div className="shape-circle shape-circle-1"></div>
        <div className="shape-circle shape-circle-2"></div>
        <div className="shape-circle shape-circle-3"></div>
        <div className="shape-circle shape-circle-4"></div>
        <div className="shape-circle shape-circle-5"></div>

        
        <div className="shape-rectangle shape-rectangle-1"></div>
        <div className="shape-rectangle shape-rectangle-2"></div>
        <div className="shape-rectangle shape-rectangle-3"></div>
        <div className="shape-rectangle shape-rectangle-4"></div>

        
        <div className="shape-square shape-square-1"></div>
        <div className="shape-square shape-square-2"></div>
        <div className="shape-square shape-square-3"></div>
        <div className="shape-square shape-square-4"></div>
      </div>
      
      <div className="login-container">
        <img
          className="login-image"
          src="https://www.reliancedigital.in/akamai/images/mobile/Login-banner.jpeg"
          alt="Login banner"
        />
        <div className="login-form">
          <h2>Login</h2>
          {error && <div className="error">{error}</div>}
          <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
