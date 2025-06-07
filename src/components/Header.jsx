import React from 'react';
import '../styles/navbar.css';

const Header = () => {
  return (
    <nav className="flex justify-center items-center py-4">
      <a href="#" className="nav-link">home</a>
      <a href="#" className="nav-link">portfolio</a>
      <a href="#" className="nav-link">contact</a>
    </nav>
  );
}

export default Header;
