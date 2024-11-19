import React, { useState } from 'react';
import logo from '../images/logo.svg';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            onClick={toggleMenu}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>

        <div className='nav-links-container'>
          <PageLinks parentClass='nav-links' itemClass='nav-link' />
          <ul className='nav-icons'>
            {socialLinks.map((link) => {
              return (
                <SocialLinks key={link.id} {...link} itemClass='nav-icon' />
              );
            })}
          </ul>
        </div>
        {/* Toggle container for smaller screens */}
        <div className={`toggle-container ${isMenuOpen ? 'show-menu' : ''}`}>
          <button className='nav-toggle close-icon' onClick={closeMenu}>
            <i className='fas fa-times'></i>
          </button>

          <div className='toggle-content'>
            <PageLinks parentClass='toggle-links' itemClass='toggle-link' />
            <ul className='toggle-icons'>
              {socialLinks.map((link) => {
                return (
                  <SocialLinks
                    key={link.id}
                    {...link}
                    itemClass='toggle-icon'
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
