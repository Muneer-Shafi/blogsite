import React, { useEffect } from "react";
import "./resume-enhanced.css";
import {
  FaBuilding,
  FaCalendar,
  FaCheck,
  FaCertificate,
  FaGraduationCap,
  FaLinkedin,
  FaList,
  FaLocationArrow,
  FaMedal,
  FaMobile,
  FaVoicemail,
} from "react-icons/fa6";
import { MdEmail, MdSchool } from "react-icons/md";
import {
  backendSkills,
  frontendSkills,
  otherSkills,
  personalInfo,
} from "@site/data/data";

type ResumeProps = {};

const Education = () => {
  useEffect(() => {
    // Animate education items when they come into view
    const items = document.querySelectorAll(".education-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));

    return () => {
      items.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="education-section">
      <h2 className="section-title">Education & Certifications</h2>

      <div className="education-item">
        <div className="education-header">
          <div>
            <h3 className="degree-title">Master of Computer Applications</h3>
            <div className="university-name">
              <MdSchool />
              University of Kashmir
            </div>
          </div>
          <div className="education-date">
            <FaCalendar />
            2020
          </div>
        </div>

        <div className="education-details">
          <p>
            Completed Master's degree in Computer Applications, focusing on
            software development, system architecture, and enterprise
            application design patterns.
          </p>
        </div>
      </div>

      <div className="education-item">
        <div className="education-header">
          <div>
            <h3 className="degree-title">
              Technical Expertise & Specializations
            </h3>
            <div className="university-name">
              <FaMedal />
              Professional Development
            </div>
          </div>
          <div className="education-date">
            <FaCalendar />
            2020 - Present
          </div>
        </div>

        <div className="education-details">
          <p>
            Continuously enhancing technical knowledge through industry
            experience, specialized training, and emerging technologies.
          </p>

          <div className="certifications">
            <h4 className="certifications-title">Key Expertise Areas</h4>
            <ul className="cert-list">
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Domain-Driven Design (DDD)
                  </span>{" "}
                  - Enterprise Architecture
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Test-Driven Development (TDD)
                  </span>{" "}
                  - Quality Assurance & Reliability
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    GenAI & LLM Integration
                  </span>{" "}
                  - Claude API & Prompt Engineering
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Symfony Advanced Patterns
                  </span>{" "}
                  - DependencyInjection, Messenger, Security
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">React with TypeScript</span>{" "}
                  - State Management & Component Architecture
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Clean Architecture & SOLID Principles
                  </span>{" "}
                  - Scalable System Design
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Resume({}: ResumeProps) {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>MUNEER SHAFI</h1>
        <div className="subtitle">
          Senior Software Engineer | Architect of Scalable Enterprise Systems
          <br />
          Specialized in Domain-Driven Design, Symfony, React, GenAI & LLM
          Development
        </div>
      </header>

      <div className="cols gap-lg flex-center">
        <span>
          <FaMobile /> {personalInfo.phone}
        </span>
        <a href="mailto:mcamuneershafi@gmail.com">
          <span>
            <MdEmail /> {personalInfo.email}
          </span>
        </a>
        <a href="https://www.linkedin.com/in/muneer-shafi-618093190/">
          <span>
            <FaLinkedin /> LinkedIn Profile
          </span>
        </a>
        <span>
          <FaLocationArrow /> India
        </span>
      </div>

      <section className="section">
        <h2 className="cols">Professional Summary</h2>
        <p>
          Senior Software Engineer with 5+ years of experience in Symfony,
          building large-scale ERP and logistics platforms. Strong expertise in
          Domain-Driven Design (DDD) and Test-Driven Development (TDD) with a
          focus on clean architecture, scalability, and long-term
          maintainability. Highly experienced in API-first backend systems,
          React with TypeScript, and deep knowledge of Symfony components.
          Recently worked on GenAI and LLM-based solutions, including an
          AI-powered chatbot integrated into an ERP system using modern AI
          application patterns.
        </p>
      </section>

      <section className="section">
        <h2 className="cols">Professional Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">Senior Software Engineer</h3>
          <div className="company-info">
            <span>
              <FaBuilding /> Qbil-Trade | Netherlands
            </span>
            <span>
              <FaCalendar />
              2021 - Present
            </span>
          </div>
          <p>
            Architected and developed enterprise-grade ERP and logistics systems
            using Symfony. Applied DDD principles to model complex business
            domains and designed high-performance, secure APIs. Led adoption of
            TDD, improving system reliability. Designed and integrated
            GenAI-powered chatbot into ERP workflows.
          </p>
          <ul className="bullet-points">
            <li>
              Architected and developed enterprise-grade ERP and logistics
              systems using Symfony with multi-module architecture (inventory,
              finance, procurement, reporting)
            </li>
            <li>
              Applied Domain-Driven Design (DDD) principles to model complex
              business domains and bounded contexts
            </li>
            <li>
              Designed and implemented high-performance, secure APIs with
              scalable architecture
            </li>
            <li>
              Led adoption of Test-Driven Development (TDD), improving system
              reliability and refactoring confidence
            </li>
            <li>
              Integrated React + TypeScript frontends with robust state
              management
            </li>
            <li>
              Implemented event-driven workflows using Symfony Messenger for
              asynchronous processing
            </li>
            <li>
              Designed and integrated GenAI-powered chatbot into ERP workflows,
              enabling natural-language interaction with ERP data
            </li>
            <li>
              Took ownership of architecture decisions and critical modules
              across the platform
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="job-title">Software Engineer</h3>
          <div className="company-info">
            <span>
              <FaBuilding /> Cloud Innovation Partners | UK
            </span>
            <span>
              <FaCalendar /> 2020 - Nov 2021
            </span>
          </div>
          <p>
            Developed ERP and logistics modules using Symfony. Built RESTful
            APIs, integrated third-party services, and contributed to system
            modernization with focus on TDD and best practices.
          </p>
          <ul className="bullet-points">
            <li>Developed ERP and logistics modules using Symfony framework</li>
            <li>Built RESTful APIs and integrated third-party services</li>
            <li>
              Contributed to system modernization and legacy code refactoring
            </li>
            <li>Applied automated testing and Symfony best practices</li>
            <li>
              Collaborated with cross-functional teams on feature development
            </li>
          </ul>
        </div>
      </section>

      <section className="section education-section">
        <Education />
      </section>

      <section className="section">
        <h2 className="cols">Languages</h2>
        <div className="rows gap-sm">
          <div className="cols gap-sm">
            <strong>Urdu/Hindi</strong>
            <i>Native Proficiency</i>
          </div>
          <div className="cols gap-sm">
            <strong>English</strong>
            <i>Professional Working</i>
          </div>
        </div>
      </section>
    </div>
  );
}
