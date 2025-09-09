import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="header_section">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img src="/images/logo.png" alt="Jus Momo" />
          </Link>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-controls="navbarSupportedContent" 
            aria-expanded={isNavOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className={`nav-item ${isActive('/menu') ? 'active' : ''}`}>
                <Link className="nav-link" to="/menu">Menu</Link>
              </li>
              <li className={`nav-item ${isActive('/franchise') ? 'active' : ''}`}>
                <Link className="nav-link" to="/franchise">Franchise</Link>
              </li>
              <li className={`nav-item ${isActive('/news') ? 'active' : ''}`}>
                <Link className="nav-link" to="/news">Story</Link>
              </li>
              <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <div className="form-group has-search">
                <input type="text" className="form-control" placeholder="Search" />
                <span className="fa fa-search form-control-feedback"></span>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;