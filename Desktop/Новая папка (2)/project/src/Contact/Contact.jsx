import React from 'react';
import './Contact.css';
import { FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-container">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:Asadbekithack.8888@gmail.com">Asadbekithack.8888@gmail.com</a>
        </div>
        <div className="contact-item">
          <FaTelegramPlane className="contact-icon" />
          <a href="https://t.me/Asadbek_hack">Telegram</a>
        </div>
      </div>

      <footer>
        <p>Copyright © 2024 Tursunov Asadbek. All Rights Reserved.</p>
        <nav className="footer-nav">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
    </div>
  );
};

export default Contact;

