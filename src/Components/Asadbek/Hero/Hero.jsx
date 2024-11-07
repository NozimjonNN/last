import React from 'react';
import './Hero.css';

const HeroConteyner = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <h1 className="logo">KONSTRU<span>T</span></h1>
        <h2>PARTNER WITH KONSTRUCT</h2>
        <p>An award-winning construction management firm</p>
        <div className="scroll-down">SCROLL DOWN</div>
      </div>
    </section>
  );
};

export default HeroConteyner;
