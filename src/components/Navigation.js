import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';
import logoImage from '../assets/logo00.png';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' && !location.hash;
    }
    return location.pathname.startsWith(path);
  };

  const handleHashClick = (e, hash) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll to hash
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false);
    // If not on home page, Link will handle navigation to /#hash
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className='navbar'>
        <div className='nav-container'>
          <Link to='/' className='nav-logo' onClick={closeMenu}>
            <img src={logoImage} alt='NBIGA Portfolio' className='logo-image' />
          </Link>
          <button 
            className='menu-toggle' 
            onClick={toggleMenu}
            aria-label='Toggle menu'
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
            <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link 
                to='/#about' 
                className={(location.pathname === '/' && location.hash === '#about') ? 'active' : ''}
                onClick={(e) => handleHashClick(e, '#about')}
              >
                À Propos
              </Link>
            </li>
            <li>
              <Link 
                to='/#competences' 
                className={(location.pathname === '/' && location.hash === '#competences') ? 'active' : ''}
                onClick={(e) => handleHashClick(e, '#competences')}
              >
                Compétences
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <div className='menu-overlay' onClick={closeMenu}></div>
      )}
    </>
  );
};

export default Navigation;
