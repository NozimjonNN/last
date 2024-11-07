import React from 'react';
import './Footer2.css';


const Footer2 = () => (
  <footer className="footer">
    {/* Newsletter Signup Section */}
    <div className="newsletter-signup">
      <h3>Newsletter Signup</h3>
      <div className="signup-form">
        <input type="email" placeholder="test@youremail.com" />
        <button className="signup-btn">Sign Up</button>
      </div>
    </div>

    {/* Footer Content Section */}
    <div className="footer-content">
      <div className="footer-column">
        <h4>Company</h4>
        <div className="company-info">
          <h5>KONSTRUKT</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
          </p>
        </div>
      </div>

      <div className="footer-column">
        <h4>Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>Contact Us</li>
          <li>FAQ</li>
          <li>Terms</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Partners</li>
          <li>News</li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Contact Us</h4>
        <address>
          213 Baker Street<br />
          Oriel City County<br />
          7000 KNW, Kountry Name<br />
          +23 994 233 4022<br />
          <a href="mailto:info@konstruct.com">info@konstruct.com</a>
        </address>
        <div className="social-icons">
          <span>🔵</span> {/* Facebook Icon */}
          <span>🐦</span> {/* Twitter Icon */}
          <span>🌐</span> {/* Google Icon */}
        </div>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="footer-bottom">
      <p>© 2017 Konstruct Inc. Designed by Jane Kathryn Teo</p>
    </div>
  </footer>
);

export default Footer2;
