import React, { useState } from 'react';
import './Login.css'
function Login({ onLogin }) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const storedAdminId = localStorage.getItem('adminId') || 'q';
  const storedAdminPassword = localStorage.getItem('adminPassword') || 'adminpass';


  const handleLogin = (e) => {
    e.preventDefault();
    

    if (userId === storedAdminId && password === storedAdminPassword) {
      onLogin(true); // Log in as admin
    } else {
      setError('Incorrect ID or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Admin Login</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="userId">Admin ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Enter your admin ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
}

export default Login;
