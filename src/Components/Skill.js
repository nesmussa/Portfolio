import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaPython, FaReact, FaPhp } from 'react-icons/fa';
import { SiCplusplus, SiDart, SiFlutter } from 'react-icons/si';

function Skill() {
  return (
    <section className="skill-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <FaHtml5 className="skill-icon" />
            <span>HTML5</span>
          </div>
          <div className="skill-item">
            <FaCss3Alt className="skill-icon" />
            <span>CSS3</span>
          </div>
          <div className="skill-item">
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
          </div>
          <div className="skill-item">
            <FaReact className="skill-icon" />
            <span>React</span>
          </div>
          <div className="skill-item">
            <FaNodeJs className="skill-icon" />
            <span>Node.js</span>
          </div>
          <div className="skill-item">
            <FaJava className="skill-icon" />
            <span>Java</span>
          </div>
          <div className="skill-item">
            <SiCplusplus className="skill-icon" />
            <span>C++</span>
          </div>
          <div className="skill-item">
            <FaPython className="skill-icon" />
            <span>Python</span>
          </div>
          <div className="skill-item">
            <FaPhp className="skill-icon" />
            <span>PHP</span>
          </div>
          <div className="skill-item">
            <SiDart className="skill-icon" />
            <span>Dart</span>
          </div>
          <div className="skill-item">
            <SiFlutter className="skill-icon" />
            <span>Flutter</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;