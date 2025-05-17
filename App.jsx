import React, { useState, useEffect } from 'react';
import AuthForm from './AuthForm';
import UserList from './UserList';
import UserDetails from './UserDetail';
import LandingPage from './LandingPage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUserList, setShowUserList] = useState(false); // New state for user list visibility

  // Static user data
  const staticUsers = [
    { id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', avatar: 'https://reqres.in/img/faces/1-image.jpg' },
    { id: 2, first_name: 'Jane', last_name: 'Doe', email: 'jane.doe@example.com', avatar: 'https://reqres.in/img/faces/2-image.jpg' },
    { id: 3, first_name: 'Mary', last_name: 'Smith', email: 'mary.smith@example.com', avatar: 'https://reqres.in/img/faces/3-image.jpg' },
  ];

  useEffect(() => {
    if (isLoggedIn) {
      setUsers(staticUsers);
    }
  }, [isLoggedIn]);

  const handleGetStarted = () => {
    setIsLoggedIn(true); // Set the user as logged in
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  const toggleUserList = () => {
    setShowUserList((prev) => !prev); // Toggle user list visibility
  };

  return (
    <div>
      {!isLoggedIn ? (
        
        <LandingPage onGetStarted={handleGetStarted} />
      ) : (
        <>
          
          <AuthForm onLoginSuccess={handleLoginSuccess} />
          <button onClick={toggleUserList}>
            {showUserList ? 'Hide User List' : 'Show User List'}
          </button>
          {showUserList && (
            <UserList users={users} setUser={setUser} setError={setError} />
          )}
          {user && <UserDetails user={user} />}
          {error && <p>Error: {error}</p>}
        </>
      )}
    </div>
  );
};

export default App; // Corrected export statement