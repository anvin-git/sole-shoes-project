import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Social media icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="logo-container">
          <img src="/assets/images/logo.jpeg" alt="SoleShoes Logo" className="logo-img" />
        </div>
        <h5>Quick Links</h5>
        <ul className="footer-menu">
          <li className="footer-item">
            <Link to="/" className="footer-link">Home</Link>
          </li>
          <li className="footer-item">
            <Link to="/about" className="footer-link">About</Link>
          </li>
          <li className="footer-item">
            <Link to="/shop" className="footer-link">Shop</Link>
          </li>
          <li className="footer-item">
            <Link to="/contact" className="footer-link">Contact</Link>
          </li>
        </ul>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        </div>
        <div className="copyright">
          &copy; 2024 SoleShoes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
