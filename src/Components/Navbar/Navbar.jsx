import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 200;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${scrolled ? 'dark-nav' : 'transparent-nav'}`}>
      <img src={logo} alt='' className='logo' />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Life@Campus</a></li>
        <li><a href="#">Testimonials</a></li>  
        <li><button className='btn'>Contact Us</button></li> 
      </ul>
    </nav>
  );
};

export default Navbar;
