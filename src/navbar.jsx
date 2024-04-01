import React from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css'; 

const NavBar = () => {
  return (
  <nav className="App-header">
    <a href="/" className="nav-item">Home</a>
    <a href="/about" className="nav-item">About</a>
    <a href="/projects" className="nav-item">Projects</a>
    <a href="/contact" className="nav-item">Contact</a>
    </nav>
  )
}

export default NavBar;
