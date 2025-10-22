import React from "react";
import Layout from "@theme/Layout";
import {
  FaRocket,
  FaWrench,
  FaBookOpen,
  FaSeedling,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaCode,
  FaServer,
  FaDocker,
  FaBrain,
  FaHeart,
} from "react-icons/fa6";
import "./aboutme.css";
type Props = {};
export default function AboutMuneer({}: Props) {
  return (
    <Layout
      title="About Muneer"
      description="Learn more about Muneer Shafi - Software Engineer"
    >
      <div className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-glow"></div>
          </div>

          <div className="hero-content">
            <div className="hero-image-container">
              <img
                src={require("@site/static/img/on_chair.jpg").default}
                alt="Muneer Shafi - Software Engineer"
                className="hero-image"
                loading="lazy"
              />
              <div className="image-frame"></div>
            </div>

            <div className="hero-text">
              <h1 className="hero-title">
                <span className="hero-greeting">Hello, I'm</span>
                <span className="hero-name">Muneer Shafi</span>
              </h1>

              <div className="hero-subtitle">
                <FaRocket className="subtitle-icon" />
                <span>Software Engineer & Full-Stack Developer</span>
              </div>

              <p className="hero-description">
                Passionate about building scalable web applications and APIs
                with modern tools and technologies. Creating impactful solutions
                that make a difference.
              </p>

              <div className="hero-location">
                <FaLocationDot />
                <span>Pampore, Jammu and Kashmir, India</span>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <div className="content-wrapper">
          {/* Skills Section */}
          <section className="content-section">
            <div className="section-header">
              <FaWrench className="section-icon" />
              <h2 className="section-title">🛠️ Tools & Technologies</h2>
            </div>

            <div className="skills-grid">
              <div className="skill-card">
                <div className="skill-header">
                  <FaServer className="skill-icon" />
                  <h3>Backend Development</h3>
                </div>
                <p>
                  Symfony framework, API Platform, REST APIs, Python (Django),
                  GraphQL
                </p>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaCode className="skill-icon" />
                  <h3>Frontend Development</h3>
                </div>
                <p>React, TypeScript, GraphQL, AngularJS, JavaScript</p>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaDocker className="skill-icon" />
                  <h3>DevOps & Infrastructure</h3>
                </div>
                <p>Docker, NixOS, AWS, Linux, CI/CD</p>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaBrain className="skill-icon" />
                  <h3>Other Skills</h3>
                </div>
                <p>
                  MySQL, JWT Authentication, Jira, OpenAPI, Agile Methodologies
                </p>
              </div>
            </div>
          </section>

          {/* Current Focus Section */}
          <section className="content-section">
            <div className="section-header">
              <FaBookOpen className="section-icon" />
              <h2 className="section-title">📚 Current Focus</h2>
            </div>

            <div className="focus-content">
              <div className="focus-card">
                <p>
                  As a software engineer, my current focus lies in crafting
                  robust and scalable enterprise-level applications. Leveraging
                  Symfony API Platform for backend development, I specialize in
                  creating RESTful and GraphQL APIs that integrate seamlessly
                  with modern frontend frameworks like React.
                </p>
                <p>
                  On the frontend, I strive to deliver responsive and dynamic
                  user experiences using React and TypeScript, ensuring
                  accessibility and performance. For deployment and
                  infrastructure, I employ Docker and NixOS, streamlining
                  workflows for development and production environments.
                </p>
                <p>
                  Additionally, I am actively exploring advanced authentication
                  methods, such as JWT, and enhancing ERP systems for greater
                  efficiency and adaptability. My ultimate goal is to align
                  cutting-edge technologies with business needs to provide
                  impactful and sustainable solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Learning Section */}
          <section className="content-section">
            <div className="section-header">
              <FaSeedling className="section-icon" />
              <h2 className="section-title">🌱 Always Learning</h2>
            </div>

            <div className="learning-content">
              <div className="learning-card">
                <div className="learning-quote">
                  <FaHeart className="quote-icon" />
                  <blockquote>
                    "Learning isn't just a task—it's a mindset that fuels my
                    drive to innovate and excel."
                  </blockquote>
                </div>

                <p>
                  I thrive on continuous learning, staying curious and adaptive
                  in the fast-evolving tech landscape. My focus extends from
                  mastering tools like React, GraphQL, and Docker to exploring
                  emerging fields like AI, Machine Learning, and Deep Learning.
                </p>
                <p>
                  I am passionate about leveraging these technologies to build
                  smarter, more impactful solutions while growing both
                  technically and collaboratively. Every challenge is an
                  opportunity to learn something new.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="section-header">
              <FaEnvelope className="section-icon" />
              <h2 className="section-title">📫 Let's Connect</h2>
            </div>

            <div className="connect-content">
              <p className="connect-description">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology. Feel free to
                reach out!
              </p>

              <div className="social-links-grid">
                <a
                  href="https://github.com/Muneer-Shafi"
                  className="social-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                >
                  <FaGithub className="social-link-icon" />
                  <div className="social-link-content">
                    <span className="social-link-title">GitHub</span>
                    <span className="social-link-subtitle">View my code</span>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/muneer-shafi-618093190/"
                  className="social-link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with me on LinkedIn"
                >
                  <FaLinkedin className="social-link-icon" />
                  <div className="social-link-content">
                    <span className="social-link-title">LinkedIn</span>
                    <span className="social-link-subtitle">Let's connect</span>
                  </div>
                </a>

                <a
                  href="mailto:mcamuneershafi@gmail.com"
                  className="social-link-card"
                  aria-label="Send me an email"
                >
                  <FaEnvelope className="social-link-icon" />
                  <div className="social-link-content">
                    <span className="social-link-title">Email</span>
                    <span className="social-link-subtitle">Get in touch</span>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
