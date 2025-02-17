import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount }) => {
  return (
    <>
      {/* Main Navigation */}
      <nav className="main-nav">
        <Link to="/" className="logo">
          <span className="logo-text">Amazon Clone</span>
          <span className="locale">.co.uk</span>
        </Link>
        
        <div className="search-container">
          <select className="search-category">
            <option>All</option>
            <option>Electronics</option>
            <option>Books</option>
          </select>
          <input type="text" className="search-input" placeholder="Search Amazon Clone" />
          <button className="search-button">
            <i className="fas fa-search"></i>
          </button>
        </div>

        <div className="nav-promo">
          <span className="live-promo">
            <i className="fas fa-play-circle"></i> LIV v LIL From 6:30 PM Prime
          </span>
        </div>

        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-count">{cartCount}</span>
        </Link>
      </nav>

      {/* Top Black Bar */}
      <div className="top-nav">
        <div className="nav-left">
          <div className="delivery-info">
            <span className="deliver-to">Deliver to</span>
            <span className="location">Cardiff</span>
          </div>
        </div>
        
        <div className="nav-right">
          <div className="top-nav-links">
            <a href="/prime" className="prime-link">
              <i className="fas fa-crown"></i> Prime Video
            </a>
            <div className="account-dropdown">
              <span>Hello, Help!</span>
              <div className="dropdown-content">
                <Link to="/account">Account & Lists</Link>
                <Link to="/orders">Returns & Orders</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
