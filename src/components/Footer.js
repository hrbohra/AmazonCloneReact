import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Get to Know Us</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/press">Press Releases</Link></li>
            <li><Link to="/science">Amazon Science</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Make Money with Us</h4>
          <ul>
            <li><Link to="/sell">Sell on Amazon</Link></li>
            <li><Link to="/affiliate">Become an Affiliate</Link></li>
            <li><Link to="/advertise">Advertise Your Products</Link></li>
            <li><Link to="/publish">Self-Publish with Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Amazon Payment Products</h4>
          <ul>
            <li><Link to="/business">Amazon Business Card</Link></li>
            <li><Link to="/shop">Shop with Points</Link></li>
            <li><Link to="/reload">Reload Your Balance</Link></li>
            <li><Link to="/currency">Amazon Currency Converter</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Let Us Help You</h4>
          <ul>
            <li><Link to="/covid">Amazon and COVID-19</Link></li>
            <li><Link to="/account">Your Account</Link></li>
            <li><Link to="/orders">Your Orders</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-logo">
          <Link to="/" className="logo">Amazon Clone</Link>
        </div>
        <div className="footer-legal">
          <span>Conditions of Use</span>
          <span>Privacy Notice</span>
          <span>Your Ads Privacy Choices</span>
        </div>
        <div className="footer-copyright">
          © 1996-2023, Amazon Clone, Inc. or its affiliates
        </div>
      </div>
    </footer>
  );
};

export default Footer;