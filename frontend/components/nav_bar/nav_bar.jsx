import React from 'react';
import { Link } from 'react-router-dom';

// This needs to change to a true nav later
export default ({ currentUser, logout }) => {
  console.log(currentUser);
  const userDisplay = currentUser ? (
    <div>
      <p>Hello, {currentUser.first_name}</p>
      <button onClick={ logout }>Log Out</button>
    </div>
  ) : (
    <div></div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">Flash Forward</h1>
      <div>
        { userDisplay }
      </div>
    </header>
  );
};
