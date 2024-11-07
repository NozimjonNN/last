import React from 'react';
import './Capabilities.css';

const capabilitiesData = [
  {
    id: 1,
    title: "Project and Construction Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
    icon: "📋",
  },
  {
    id: 2,
    title: "Structure Audit and Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
    icon: "🏢",
  },
  {
    id: 3,
    title: "Factory Construction and Modeling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.",
    icon: "🏠",
  },
];

const CapabilityCard = ({ icon, title, description }) => (
  <div className="capability-card">
    <div className="capability-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const Capabilities = () => (
  <div className="capabilities-section">
    <h2>Our Capabilities</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.
    </p>
    <div className="capabilities-cards">
      {capabilitiesData.map((item) => (
        <CapabilityCard key={item.id} {...item} />
      ))}
    </div>
    <button className="all-services-btn">All Services</button>
  </div>
);

export default Capabilities;
