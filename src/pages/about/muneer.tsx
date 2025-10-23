import React, { useState, useEffect } from "react";
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
  FaTrophy,
  FaCalendar,
  FaMugHot,
  FaGamepad,
  FaMusic,
  FaCamera,
  FaStar,
  FaAward,
  FaBriefcase,
  FaGraduationCap,
  FaUsers,
  FaLightbulb,
  FaChartLine,
  FaGlobe,
  FaClock,
  FaCheck,
} from "react-icons/fa6";
import "./aboutme.css";

type Props = {};

export default function AboutMuneer({}: Props) {
  const [currentYear] = useState(new Date().getFullYear());
  const experienceYears = currentYear - 2020; // Assuming started in 2020

  const [animatedStats, setAnimatedStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    coffee: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats({
        projects: 10,
        clients: 10,
        experience: experienceYears,
        coffee: 500,
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [experienceYears]);

  return (
    <Layout
      title="About Muneer"
      description="Learn more about Muneer Shafi - Software Engineer"
    >
      <div className="about-container">
        {/* Animated Background Elements */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
        </div>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-background">
            <div className="hero-glow"></div>
            <div className="hero-particles">
              {[...Array(20)].map((_, i) => (
                <div key={i} className={`particle particle-${i + 1}`}></div>
              ))}
            </div>
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
              <div className="image-glow"></div>
            </div>

            <div className="hero-text">
              <div className="hero-badge">
                <FaStar className="badge-icon" />
                <span>Available for Projects</span>
              </div>

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
                that make a difference in the digital world.
              </p>

              <div className="hero-stats">
                <div className="stat-item">
                  <span className="stat-number">
                    {animatedStats.experience}+
                  </span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{animatedStats.projects}+</span>
                  <span className="stat-label">Projects Completed</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{animatedStats.clients}+</span>
                  <span className="stat-label">Happy Clients</span>
                </div>
              </div>

              <div className="hero-location">
                <FaLocationDot />
                <span>Pampore, Jammu and Kashmir, India</span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Facts Section */}
        <section className="quick-facts-section">
          <div className="quick-facts-container">
            <div className="fact-card">
              <FaMugHot className="fact-icon" />
              <div className="fact-content">
                <span className="fact-number">{animatedStats.coffee}+</span>
                <span className="fact-label">Cups of Coffee</span>
              </div>
            </div>
            <div className="fact-card">
              <FaCode className="fact-icon" />
              <div className="fact-content">
                <span className="fact-number">10+</span>
                <span className="fact-label">Programming Languages</span>
              </div>
            </div>
            <div className="fact-card">
              <FaGlobe className="fact-icon" />
              <div className="fact-content">
                <span className="fact-number">24/7</span>
                <span className="fact-label">Problem Solving</span>
              </div>
            </div>
            <div className="fact-card">
              <FaLightbulb className="fact-icon" />
              <div className="fact-content">
                <span className="fact-number">∞</span>
                <span className="fact-label">Ideas Generated</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="content-wrapper">
          {/* About Me Section */}
          <section className="content-section">
            <div className="section-header">
              <FaUsers className="section-icon" />
              <h2 className="section-title">👨‍💻 About Me</h2>
            </div>

            <div className="about-content">
              <div className="about-card">
                <div className="about-text">
                  <p>
                    I'm a passionate software engineer with a love for creating
                    digital solutions that make a real difference. My journey in
                    technology began with curiosity and has evolved into a
                    dedicated career focused on building robust, scalable
                    applications.
                  </p>
                  <p>
                    When I'm not coding, you'll find me exploring new
                    technologies, contributing to open-source projects, or
                    enjoying the beautiful landscapes of Kashmir. I believe in
                    continuous learning and staying updated with the latest
                    industry trends.
                  </p>
                </div>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <FaCheck className="highlight-icon" />
                    <span>Problem Solver</span>
                  </div>
                  <div className="highlight-item">
                    <FaCheck className="highlight-icon" />
                    <span>Team Player</span>
                  </div>
                  <div className="highlight-item">
                    <FaCheck className="highlight-icon" />
                    <span>Quick Learner</span>
                  </div>
                  <div className="highlight-item">
                    <FaCheck className="highlight-icon" />
                    <span>Detail Oriented</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

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
                  GraphQL, Node.js
                </p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <span className="progress-label">Expert</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaCode className="skill-icon" />
                  <h3>Frontend Development</h3>
                </div>
                <p>
                  React, TypeScript, GraphQL, AngularJS, JavaScript, HTML5, CSS3
                </p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <span className="progress-label">Advanced</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaDocker className="skill-icon" />
                  <h3>DevOps & Infrastructure</h3>
                </div>
                <p>Docker, NixOS, AWS, Linux, CI/CD, Kubernetes, Terraform</p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <span className="progress-label">Advanced</span>
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-header">
                  <FaBrain className="skill-icon" />
                  <h3>AI & Machine Learning</h3>
                </div>
                <p>
                  Python, TensorFlow, Scikit-learn, OpenAI API, Data Analysis
                </p>
                <div className="skill-progress">
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <span className="progress-label">Intermediate</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience Timeline */}
          <section className="content-section">
            <div className="section-header">
              <FaBriefcase className="section-icon" />
              <h2 className="section-title">💼 Experience Journey</h2>
            </div>

            <div className="timeline-container">
              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaCalendar />
                </div>
                <div className="timeline-content">
                  <h3>Started Coding Journey</h3>
                  <span className="timeline-date">2020</span>
                  <p>
                    Began learning programming fundamentals and web development
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaCode />
                </div>
                <div className="timeline-content">
                  <h3>First Professional Role</h3>
                  <span className="timeline-date">2021</span>
                  <p>
                    Joined as a Junior Developer, working with PHP and
                    JavaScript
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaServer />
                </div>
                <div className="timeline-content">
                  <h3>Backend Specialist</h3>
                  <span className="timeline-date">2022</span>
                  <p>Specialized in Symfony and API development</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-marker">
                  <FaRocket />
                </div>
                <div className="timeline-content">
                  <h3>Full-Stack Developer</h3>
                  <span className="timeline-date">2023</span>
                  <p>
                    Expanded to full-stack development with React and modern
                    tools
                  </p>
                </div>
              </div>

              <div className="timeline-item current">
                <div className="timeline-marker">
                  <FaChartLine />
                </div>
                <div className="timeline-content">
                  <h3>Senior Developer</h3>
                  <span className="timeline-date">2024 - Present</span>
                  <p>Leading projects and mentoring junior developers</p>
                </div>
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

          {/* Hobbies & Interests */}
          <section className="content-section">
            <div className="section-header">
              <FaGamepad className="section-icon" />
              <h2 className="section-title">🎯 Beyond Code</h2>
            </div>

            <div className="hobbies-grid">
              <div className="hobby-card">
                <FaMugHot className="hobby-icon" />
                <h3>Coffee Enthusiast</h3>
                <p>Fuel for late-night coding sessions and creative thinking</p>
              </div>

              <div className="hobby-card">
                <FaMusic className="hobby-icon" />
                <h3>Music Lover</h3>
                <p>
                  From classical to electronic, music inspires my creativity
                </p>
              </div>

              <div className="hobby-card">
                <FaCamera className="hobby-icon" />
                <h3>Photography</h3>
                <p>Capturing beautiful moments and landscapes</p>
              </div>

              <div className="hobby-card">
                <FaGlobe className="hobby-icon" />
                <h3>Travel</h3>
                <p>Exploring new places and experiencing different cultures</p>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="content-section">
            <div className="section-header">
              <FaTrophy className="section-icon" />
              <h2 className="section-title">🏆 Achievements</h2>
            </div>

            <div className="achievements-grid">
              <div className="achievement-card">
                <FaAward className="achievement-icon" />
                <div className="achievement-content">
                  <h3>Top Contributor</h3>
                  <p>Open Source projects and community contributions</p>
                </div>
              </div>

              <div className="achievement-card">
                <FaStar className="achievement-icon" />
                <div className="achievement-content">
                  <h3>Client Satisfaction</h3>
                  <p>Consistently delivering high-quality solutions</p>
                </div>
              </div>

              <div className="achievement-card">
                <FaLightbulb className="achievement-icon" />
                <div className="achievement-content">
                  <h3>Innovation</h3>
                  <p>Implementing cutting-edge technologies</p>
                </div>
              </div>
            </div>
          </section>

          {/* Connect Section */}
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
