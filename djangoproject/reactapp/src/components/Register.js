import React, { useState} from 'react';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [errorMessage, setErrorMessage] = useState('');

 const navigate = useNavigate();

 const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        break;
    }
 };

 const handleSubmit = (event) => {
  event.preventDefault();
  axios.post('http://127.0.0.1:8000/authentification/register/', {
      username: email,
      password: password,
      first_name: firstName,
      last_name: lastName
  })
  .then(response => {
      console.log('User registered successfully:', response.data);
      navigate('/home');

  })
  .catch(error => {
      setErrorMessage(error.message || 'An error occurred during registration.');
  });
};

 return (
    <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={handleInputChange} placeholder="First Name" />
            <input type="text" name="lastName" value={lastName} onChange={handleInputChange} placeholder="Last Name" />
            <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
            <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
            <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleInputChange} placeholder="Confirm Password" />
            <button type="submit">Create account</button>
            <Link className="login-button" to={`/login`}>Login</Link>
        </form>
    </div>
 );
};

export default Register;