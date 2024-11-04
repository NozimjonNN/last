import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-subtitle">Get To Know More</h3>
      <h1 className="about-title">About Me</h1>
      
      <div className="about-info-container">
        <div className="about-info-box">
          <FaUserGraduate className="about-icon" />
          <h3 className="about-info-title">Education</h3>
          <p className="about-info-details">CoddyCamp IT Academy</p>
          <p className="about-info-details">High Certificate</p>
          <p className="about-info-details">03/2024</p>
        </div>
      </div>
      
      <div className="about-summary-container">
        <h3 className="about-summary-title">Summary</h3>
        <p className="about-summary-text">
          Hi, I am a Frontend Developer. A hardworking, passionate, and positive person. 
          I like working in a team, and I work hard and get along well with the team. 
          I am looking for a good team and job, ready to help teams achieve company goals.
        </p>
      </div>
    </div>
  );
};

export default About;
