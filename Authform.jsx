import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'; // Ensure to import the CSS file

const AuthForm = ({ onLoginSuccess }) => {
  const [isRegistering, setIsRegistering] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const validEmail = "mathew@example.com"; // Replace with your custom email
  const validPassword = "123456"; // Replace with your custom password

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isRegistering) {
      if (email === validEmail && password === validPassword) {
        setMessage('Success: Logged in successfully.');
        onLoginSuccess();
      } else {
        setMessage('Error: Invalid email or password.');
      }
    } else {
      const url = 'https://reqres.in/api/register';
      try {
        await axios.post(url, { email, password });
        setMessage('Success: Registered successfully.');
      } catch (error) {
        setMessage('Error: Registration failed.');
      }
    }
  };

  return (
    <div className="auth-form-container">
      <img src="https://png.pngtree.com/png-vector/20241210/ourmid/pngtree-user-profile-login-icon-in-gold-color-access-authentication-vector-png-image_14688834.png" alt="Logo" className="logo" /> {/* Update with your logo path */}
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="auth-input"
        />
        <button type="submit" className="auth-button">
          {isRegistering ? 'Register' : 'Login'}
        </button>
      </form>
      <button
        className="toggle-button"
        onClick={() => setIsRegistering(!isRegistering)}
      >
        Switch to {isRegistering ? 'Login' : 'Register'}
      </button>

      {message && <p className="auth-message">{message}</p>}
    </div>
  );
};

export default AuthForm;
     