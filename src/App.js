import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin, faTelegram } from "@fortawesome/free-brands-svg-icons";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skill from "./Components/Skill";
import "./App.css";

function App() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    // Observe all sections
    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Active nav link updater
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");
      const scrollPosition = window.scrollY + 100; // Adjust offset for better accuracy

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // Check if section is in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup scroll listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">Neserelah Mussa</h1>
          <nav className="nav">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#skill" className="nav-link">
              Skill
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section id="home">
          <div className="container">
            <Home />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <About />
          </div>
        </section>

        <section id="skill">
          <div className="container">
            <Skill />
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <Projects />
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <Contact />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <p>&copy; 2025 Neserelah Mussa. All rights reserved.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/nes.mussa/" className="social-link">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://t.me/nesmussa" className="social-link">
              <FontAwesomeIcon icon={faTelegram} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/nesmussa/" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://github.com/nesmussa" className="social-link">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;