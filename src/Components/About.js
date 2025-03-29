import React from "react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-content">
        <div className="about-text">
          <h2 className="section-title">About Me</h2>
          <p className="section-text">
            Hi, I'm Neserelah Mussa from Addis Abeba, Ethiopia. Currently, I'm a 4th-year, 2nd-semester Software Engineering student at Injibara University. My passion lies in creating system solutions, developing websites, and building mobile applications.
          </p>
          <p className="section-text">
            My fascination with technology started early and has only grown stronger over the years. I thrive on creativity, problem-solving, and teamwork to bring ideas to life. I'm proficient in several programming languages and frameworks, which you can explore in my <a href="#skill" className="highlight-link">Skills Section</a>.
          </p>
          <p className="section-text">
            Outside of coding, I enjoy playing football, engaging in religious practices, and creating tech content. These activities not only provide balance in my life but also inspire my technical work.
          </p>
          <p className="section-text highlight">
            My ultimate goal? To become the best software engineer in Ethiopia and Africa!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;