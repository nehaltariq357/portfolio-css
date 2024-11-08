import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to creating high-quality web experiences.
            Lets build something amazing together!
          </p>
        </div>

        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/component/About">About</Link></li>
            <li><Link href="/component/Contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <li >Facebook</li>
            <li >Twitter</li>
            <li >LinkedIn</li>
            <li>Instagram</li>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nehal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
