import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="burger-menu-container">
      <div className="navbar">
        <div className="logo">
        <h1>Asadbek</h1>
          
        
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            <div className="close-icon">X</div>
          ) : (
            <div className="hamburger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
        </div>
      </div>

      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/problems">Problems</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/events">Events</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
