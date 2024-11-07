import React from 'react';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="our-story">
      <h3>OUR STORY</h3>
      <h2>
        Founded in 2011 by John Mathew Smith, <span>Konstruct</span> has become the number one construction management firm
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
      </p>
      <div className="service-cards">
        <div className="card">
          <div className="card-overlay">WE PLAN</div>
        </div>
        <div className="card">
          <div className="card-overlay">WE MANAGE</div>
        </div>
        <div className="card">
          <div className="card-overlay">WE BUILD</div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
