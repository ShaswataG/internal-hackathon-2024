import React from 'react';
import logo from '../assets/logo.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Logo" className="logo" />
      <h1>ABC HOSPITAL</h1>
      <input type="text" placeholder="Search" className="search" />
    </header>
  );
}

export default Header;
