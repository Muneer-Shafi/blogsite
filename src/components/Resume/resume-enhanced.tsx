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
      { threshold: 0.2 }
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
            <h3 className="degree-title">Master's in Computer Application</h3>
            <div className="university-name">
              <MdSchool />
              University of Kashmir
            </div>
          </div>
          <div className="education-date">
            <FaCalendar />
            2017 - 2021
          </div>
        </div>

        <div className="education-details">
          <p>
            Completed Master's degree with specialization in software
            development and system architecture, graduating with honors.
          </p>

          <div className="certifications">
            <h4 className="certifications-title">
              Professional Certifications
            </h4>
            <ul className="cert-list">
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Advanced PHP Development
                  </span>{" "}
                  - University of Kashmir{" "}
                  <span className="cert-grade">A++</span>
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Python & Machine Learning Certification
                  </span>
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Advanced SQL Database Management
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="education-item">
        <div className="education-header">
          <div>
            <h3 className="degree-title">
              Technical Workshops & Specializations
            </h3>
            <div className="university-name">
              <FaMedal />
              Various Industry Programs
            </div>
          </div>
          <div className="education-date">
            <FaCalendar />
            2020 - Present
          </div>
        </div>

        <div className="education-details">
          <p>
            Continuously enhancing technical knowledge through specialized
            training and industry workshops.
          </p>

          <div className="certifications">
            <h4 className="certifications-title">Key Specializations</h4>
            <ul className="cert-list">
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Enterprise Architecture Patterns
                  </span>{" "}
                  - System Design Workshop
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    React Advanced Patterns
                  </span>{" "}
                  - Frontend Masters
                </span>
              </li>
              <li className="cert-item">
                <FaCertificate />
                <span className="cert-text">
                  <span className="cert-highlight">
                    Cloud Infrastructure & DevOps
                  </span>{" "}
                  - AWS Certified
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
          Senior software engineer | Architect of Scalable Web Solutions
          <br />
          Specialized in React, GraphQL, PHP Symfony, and Modern Web
          Technologies
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
          <FaLocationArrow /> Kashmir, India 191103
        </span>
      </div>

      <section className="section">
        <h2 className="cols">Professional Summary</h2>
        <p>
          Dynamic and results-driven Software engineer with extensive experience
          in building enterprise-level applications. Specializing in modern web
          technologies and architectural patterns, I bring a proven track record
          of delivering innovative solutions that drive business growth. Expert
          in creating scalable applications using React, PHP Symfony, and
          GraphQL, with a strong focus on code quality and performance
          optimization.
        </p>
      </section>

      <section className="section">
        <h2 className="cols">Professional Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">Senior Software engineer</h3>
          <div className="company-info">
            <span>
              <FaBuilding /> Qbil Software | Srinagar, India
            </span>
            <span>
              <FaCalendar />
              2021 - Present
            </span>
          </div>
          <p>
            Leading development of enterprise-grade ERP solutions for
            international trade and logistics, serving diverse industries
            including oils, dairy, and chemical raw materials.
          </p>
          <ul className="bullet-points">
            <li>
              Architected and implemented scalable backend solutions using PHP
              Symfony, achieving 40% improvement in application performance
            </li>
            <li>
              Developed sophisticated frontend interfaces using React and
              GraphQL, resulting in 30% faster data loading times
            </li>
            <li>
              Engineered efficient database solutions using Doctrine ORM and
              SQL, handling complex data relationships
            </li>
            <li>
              Implemented advanced CSS architectures for maintainable and
              responsive designs
            </li>
            <li>
              Led technical initiatives that reduced system downtime by 50%
              through improved error handling and monitoring
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <h3 className="job-title">Software Engineer Team Lead</h3>
          <div className="company-info">
            <span>
              <FaBuilding /> Cloud Innovation Partners | Srinagar, India
            </span>
            <span>
              <FaCalendar /> 11/2020 - 11/2021
            </span>
          </div>
          <p>
            Led development initiatives at a security-focused innovation
            company, driving technical excellence and team growth.
          </p>
          <ul className="bullet-points">
            <li>
              Successfully led and mentored a team of 7 full-stack developers,
              implementing Agile methodologies
            </li>
            <li>
              Designed and implemented automated database maintenance solutions,
              improving system reliability
            </li>
            <li>
              Developed modern, responsive user interfaces using React and
              Symfony, enhancing user experience
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
