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
    {
      title: "Customer Satisfaction Management System for Bole Sub-City",
      description:
        "is a web application designed to schedule online appointments and collect and analyze customer feedback for Bole Sub-City, enhancing service quality. Used Technologies: React, Node.js, Express, mysql.",
      github: "https://cfmsui.technosophia.net/",
    },
    {
      title: "Website for Zemzem Food Complex",
      description:
        "is a website designed to promote products and customer feedback for Zemzem Food Complex, enhancing service quality. Used Technologies: React.",
      github: "https://zemzem.technosophia.net/",
    },
    {
      title: "Dictionary App",
      description:
        "A mobile app that provides definitions, synonyms, and translations of words in English and Amharic languages. technologies used: Flutter, Dart, sqlite.",
      github: "https://github.com/nesmussa/Dictionary.git",
    },
    {
      title: "Patent-Information-Management",
      description:
        "A Desktop(java) app that provides patent information and management features. technologies used: Java, Jframe, MySQL.",
      github: "https://github.com/nesmussa/Patent-Information-Management.git",
    },
    {
      title: "Website for Technosophia(my team)",
      description:
        "A website that showcases the projects and services of Technosophia, a team of developers. technologies used: React.",
      github: "https://technosophia.net/",
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
              View
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
