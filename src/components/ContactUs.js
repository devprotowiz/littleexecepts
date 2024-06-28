import React from 'react';
import '../styles/ContactUs.css';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa';

import nelsonImage from '../assets/images/nelson.png'; // Make sure to place your image here
import logo from '../assets/images/logo.svg'; // Ensure logo path is correct

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className="hero">
        <div className="hero-text">
          <p>"Education is the most powerful weapon which you can use to change the world."</p>
          <span>-- Nelson Mandela</span>
        </div>
        <img src={nelsonImage} alt="Nelson Mandela" className="nelson-image" />
      </div>
      <div className="footer">
        <div className="footer-content">
          <img src={logo} alt="Little Experts" className="footer-logo" />
          <div className="quick-links">
            <h3>Quick links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#why-choose-us">Why Choose Us</a></li>
            </ul>
          </div>
          <div className="contact-info">
            <h3>Connect with us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://www.instagram.com/littleexperts?igsh=cWpmYzFzNWZjbjc3" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
            <div className="contact-details">
              <p><FaPhone /> <a href="tel:8056143652">8056143652</a></p>
              <p><FaEnvelope /> <a href="mailto:littleexperts.academy@gmail.com">littleexperts.academy@gmail.com</a></p>
              <p><FaMapMarkerAlt/> R1/7, Ground Floor, Town Centre, Elango Adigal street, Kattangulathur.</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <ul>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-conditions">Terms & Conditions</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
          <p>© Copyright 2024, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
