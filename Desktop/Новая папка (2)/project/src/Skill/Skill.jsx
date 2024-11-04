import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './Skill.css';

const skillsData = [
  {
    category: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React JS', 'Bootstrap', 'Tailwind css'],
  },
  {
    category: 'Frontend Development',
    skills: ['Figma', 'Git', 'GitHub', 'Teamwork', 'Hardwork', 'Leadership'],
  },
];

const Skill = () => {
  return (
    <div className="skills-container">
      <h3 className="skills-subtitle">Explore My</h3>
      <h1 className="skills-title">Skills</h1>

      <div className="skills-grid">
        {skillsData.map((group, index) => (
          <div className="skills-box" key={index}>
            <h3 className="skills-category">{group.category}</h3>
            <ul className="skills-list">
              {group.skills.map((skill, idx) => (
                <li className="skill-item" key={idx}>
                  <FaCheckCircle className="skill-icon" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
