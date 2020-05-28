import React from 'react';

const Greeting = props => {
  const { currentUser, logout, openModal } = props;

  const sessionLinks = () => (
    <nav className="login-signup">
      <button className="session-button" onClick={() => openModal('login')}>Log In</button>
      <button className="session-button" onClick={() => openModal('signup')}>Sign Up</button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Welcome, {currentUser.firstName}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
  );

  return (
    currentUser ?
    personalGreeting() :
    sessionLinks()
  );
};

export default Greeting;
