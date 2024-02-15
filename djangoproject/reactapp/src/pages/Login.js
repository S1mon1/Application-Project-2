import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://127.0.0.1:8000/authentification/token/', {
      username: email,
      password: password
    })
    .then(response => {
      console.log('User logged in successfully:', response.data);
      localStorage.setItem('access', response.data.access);
      localStorage.setItem('refresh', response.data.refresh);
    })
    .catch(error => {
      setErrorMessage(error.message || 'An error occurred during login.');
    });
    navigate('/')
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
        <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
        <button type="submit">Login</button>
        {errorMessage && <div>{errorMessage}</div>}
        <Link className="create-account-button" to="/register">Create Account</Link>
      </form>
    </div>
  );
};

export default Login;