import React from "react";

function Projects() {
  const projectList = [
    {
      title: "Job-Portal",
      description:
        "A website that connects employers with employees, filtering job listings to match eligibility criteria.",
      github: "https://github.com/nesmussa/job-portal.git",
    },
    {
      title: "To-Do List",
      description:
        "A mobile app designed to organize tasks and send notifications as reminders.",
      github: "https://github.com/nesmussa/To-do-list.git",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
