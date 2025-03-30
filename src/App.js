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

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const navLinks = document.querySelectorAll(".nav-link");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-container">
          <h1 className="logo">Neserelah Mussa</h1>
          <button
            className="hamburger-menu"
            onClick={() => {
              const nav = document.querySelector('.nav');
              if (nav) {
                nav.classList.toggle('visible');
              }
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <nav
            className="nav"
            onClick={(e) => {
              if (e.target.classList.contains("nav-link")) {
                const nav = document.querySelector(".nav");
                if (nav) {
                  nav.classList.remove("visible");
                }
              }
            }}
          >
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
            <img src={`${process.env.PUBLIC_URL}/path-to-your-image.jpg`} alt="Description" />
          </div>
        </section>

        <section id="about">
          <div className="container">
            <About />
            <img src={`${process.env.PUBLIC_URL}/path-to-your-image.jpg`} alt="Description" />
          </div>
        </section>

        <section id="skill">
          <div className="container">
            <Skill />
            <img src={`${process.env.PUBLIC_URL}/path-to-your-image.jpg`} alt="Description" />
          </div>
        </section>

        <section id="projects">
          <div className="container">
            <Projects />
            <img src={`${process.env.PUBLIC_URL}/path-to-your-image.jpg`} alt="Description" />
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <Contact />
            <img src={`${process.env.PUBLIC_URL}/path-to-your-image.jpg`} alt="Description" />
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
