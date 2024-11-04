import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowUp } from 'react-icons/ai';
import './Hero.css';

const Hero = () => {
  return (
    <section className="container">
      <h2 className="greeting">Hello, I'm</h2>
      <h1 className="name">Asadbek</h1>
      <h3 className="title">Frontend Developer</h3>
      <div className="buttons">
        <a href="file:///C:/Users/Manzura/Desktop/My%20Resume.pdf" download className="download-btn">
          Download CV
        </a>
        <a href="asadbekithack.8888@gmail.com" className="contact-btn">
          Contact Info
        </a>
      </div>
      <div className="icons">
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin className="icon" />
        </a>
        <a href="https://github.com/Asadbek888" target="_blank" rel="noopener noreferrer">
          <AiFillGithub className="icon" />
        </a>
     
      </div>
    </section>
  );
};

export default Hero;



