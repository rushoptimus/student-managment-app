import React, { useState } from 'react';
import Nav from "./Nav";
import Page from './Page';
import Login from './Login'; // Add a Login component for the authentication


function AdminLogin() {
  // Set initial login state to `false` (not authenticated)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler function to set login state to `true` after successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      {isLoggedIn ? (
        // Render the main components only if logged in
        <>
          <Nav />
          <Page />
        </>
      ) : (
        // Render the Login component if not logged in
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}

export default AdminLogin;
