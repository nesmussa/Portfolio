import React from "react";
import profilePic from "../img/pic.PNG"; // Adjusted import path based on the src folder structure

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h2 className="section-title">Hi, I'm Neserelah Mussa</h2>
          <p className="section-subtitle">
            A passionate software developer with a love for building innovative solutions.
          </p>
          <p className="section-description">
            I specialize in creating web and mobile applications that solve real-world problems.
            Let's create something amazing together!
          </p>
          <a href="#projects" className="btn-primary">
            Check out my projects
          </a>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Neserelah Mussa" />
        </div>
      </div>
    </section>
  );
}

export default Home;