import React, { useState, useEffect } from 'react';
import { Button1 } from './Button1';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Past Papers
          </Link>
          
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
                About
              </a>
            </li>

            <li className='nav-item'>
              <a href='/' className='nav-links' onClick={closeMobileMenu}>
              Service
              </a>
             
            </li>

            <li className='nav-item'>
              <a
                href='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Testimonats
              </a>
            </li>

            <li className='nav-item'>
              <Link
                href='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Protfolio
              </Link>
            </li>

            <li className='nav-item'>
              <a
                 href='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact Us
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Login
              </a>
            </li>

            <li>
              <a
                href='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
            
          </ul>
          {button && <Button1 buttonStyle='btn--outline'>SIGN UP</Button1>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
