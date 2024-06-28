import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSpring, animated } from 'react-spring';
import '../styles/Header.css';
import logo from '../assets/images/logo.svg'; // Adjust the path if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sidebarAnimation = useSpring({
    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)'
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Little Experts" />
      </div>
      <nav className="nav-list">
        <ul>
          <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
          <li><Link to="about-us" smooth={true} duration={500}>About Us</Link></li>
          <li><Link to="why-choose-us" smooth={true} duration={500}>Why Choose Us</Link></li>
          <li><Link to="courses" smooth={true} duration={500}>Courses</Link></li>
          <li><Link to="book-demo" smooth={true} duration={500}>Book a Free Demo</Link></li>
          <li><Link to="contact-us" smooth={true} duration={500}>Contact Us</Link></li>
        </ul>
      </nav>
      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <animated.div className="sidebar" style={sidebarAnimation}>
        <div className="sidebar-header">
          <button onClick={toggleMenu} className="close-button"><FaTimes /></button>
        </div>
        <div className="sidebar-body">
          <ul>
            <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
            <li><Link to="about-us" smooth={true} duration={500} onClick={toggleMenu}>About Us</Link></li>
            <li><Link to="why-choose-us" smooth={true} duration={500} onClick={toggleMenu}>Why Choose Us</Link></li>
            <li><Link to="courses" smooth={true} duration={500} onClick={toggleMenu}>Courses</Link></li>
            <li><Link to="book-demo" smooth={true} duration={500} onClick={toggleMenu}>Book a Free Demo</Link></li>
            <li><Link to="contact-us" smooth={true} duration={500} onClick={toggleMenu}>Contact Us</Link></li>
          </ul>
        </div>
      </animated.div>
    </header>
  );
};

export default Header;
