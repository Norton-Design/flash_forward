import React from 'react';
import { Link } from 'react-router-dom';

export default ({ currentUser, logout }) => {
  console.log(currentUser);
  const userDisplay = currentUser ? (
    <div>
      <p>Hello, {currentUser.first_name}</p>
      <button onClick={ logout }>Log Out</button>
    </div>
  ) : (
    <div>
      {/* This will be a spot of the Sign Up and Log In buttons on the far right */}
      {/* <Link className="btn" to="/signup">Sign Up</Link>
      <Link className="btn" to="/login">Log In</Link> */}
    </div>
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
