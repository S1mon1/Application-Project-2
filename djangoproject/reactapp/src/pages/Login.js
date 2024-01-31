import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

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
    console.log(email, password);
 };

 return (
    <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
            <button type="submit">Login</button>
            <Link className="create-account-button" to={`/register`}>Create Account</Link>
        </form>
    </div>
 );
};

export default Login;