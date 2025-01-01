import React from "react";
import "./resume.css";
import {
  FaBuilding,
  FaCalendar,
  FaCheck,
  FaLinkedin,
  FaList,
  FaLocationArrow,
  FaMobile,
  FaVoicemail,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import {
  backendSkills,
  frontendSkills,
  otherSkills,
  personalInfo,
} from "@site/data/data";
type ResumeProps = {};

export default function Resume({}: ResumeProps) {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>MUNEER SHAFI</h1>
        <div className="subtitle">
          Senior Full Stack Developer | Architect of Scalable Web Solutions
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
          Dynamic and results-driven Full Stack Developer with extensive
          experience in building enterprise-level applications. Specializing in
          modern web technologies and architectural patterns, I bring a proven
          track record of delivering innovative solutions that drive business
          growth. Expert in creating scalable applications using React, PHP
          Symfony, and GraphQL, with a strong focus on code quality and
          performance optimization.
        </p>
      </section>

      <section className="section">
        <h2 className="cols">Professional Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">Senior Full Stack Developer</h3>
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
          <h3 className="job-title">Full Stack Developer Team Lead</h3>
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

      <section className="section">
        <h2 className="cols">Technical Expertise</h2>
        <div className="grid-container col-span-3">
          <div className="rows gap-md">
            <h3 className="cols gap-sm">Backend Development</h3>
            <div className="rows gap-md">
              {backendSkills.map((skill) => (
                <span key={skill.name}>
                  <FaCheck /> {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="rows gap-md">
            <h3 className="cols gap-sm">Frontend Development</h3>
            <div className="rows gap-sm">
              {frontendSkills.map((skill) => (
                <span key={skill.name}>
                  <FaCheck /> {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="rows gap-md">
            <h3 className="cols gap-sm">Database & Tools</h3>
            <div className="rows gap-sm">
              {otherSkills.map((skill) => (
                <span key={skill.name}>
                  <FaCheck /> {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="cols">
          Key Achievements & Professional Growth
        </h2>
        <div className="achievements">
          <div className="achievement-box">
            <h3>Technical Achievements</h3>
            <ul className="bullet-points">
              <li>
                Spearheaded development of mission-critical applications using
                modern tech stack
              </li>
              <li>
                Implemented advanced database optimization techniques, improving
                query performance by 45%
              </li>
              <li>
                Reduced production bugs by 60% through robust testing strategies
              </li>
              <li>
                Successfully delivered 15+ major features ahead of schedule
              </li>
            </ul>
          </div>
          <div className="achievement-box">
            <h3>Professional Philosophy</h3>
            <p>
              Driven by a passion for creating exceptional web experiences
              through innovative solutions. Committed to continuous learning and
              staying ahead of industry trends. Thrive in challenging
              environments where technical excellence meets creative
              problem-solving. Dedicated to mentoring others and fostering a
              collaborative development culture.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="cols">Education & Certifications</h2>
        <div className="experience-item">
          <h3 className="job-title">Master's in Computer Application</h3>
          <div className="company-info">
            <span>University of Kashmir</span>
            <span>2017 - 2020</span>
          </div>
          <div className="certifications">
            <strong>Professional Certifications:</strong>
            <ul className="bullet-points">
              <li>Advanced PHP Development (University of Kashmir - A++)</li>
              <li>Python & Machine Learning Certification</li>
              <li>Advanced SQL Database Management</li>
            </ul>
          </div>
        </div>
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
