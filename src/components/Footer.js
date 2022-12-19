import React from 'react';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
             Past Papers
             
            </Link>
          </div>
          <small class='website-rights'>PastPapers © 2022</small>
          <div class='social-icons'>
            <a href='https://www.facebook.com/'
             target='_blank'
             className='social-icon-link facebook'
             aria-label='Facebook'
             >
              <i class='fab fa-facebook' />
            </a>
           
            <a href='https://www.instagram.com/'
             target='_blank'
             className='social-icon-link instagram'
             aria-label='Instagram'
             >
              <i class='fab fa-instagram' />
            </a>

            <a href='https://www.youtube.com/'
             target='_blank'
             className='social-icon-link youtube'
             aria-label='Youtube'
             >
              <i class='fab fa-youtube' />
            </a>

            <a href='https://www.linkedin.com/'
             target='_blank'
             className='social-icon-link linkedin'
             aria-label='Linkedin'
             >
              <i class='fab fa-linkedin' />
            </a>
 
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
