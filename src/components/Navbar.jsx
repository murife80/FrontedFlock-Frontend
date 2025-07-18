// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">FlickFlock</div>
      <ul className="nav-links">
        <li>Movies</li>
        <li>TV Shows</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Profile</li>
      </ul>
    </nav>
  );
}

export default Navbar;
