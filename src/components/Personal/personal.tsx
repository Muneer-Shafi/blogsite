import React from "react";
import "./personal.css";
import { FaAddressCard, FaSchool } from "react-icons/fa6";
import { educationInfo, personalInfo } from "@site/data/data";

type Props = {};

const PersonalInfo: React.FC = () => {
  return (
    <section className="personal-container">
      <article className="personal-card">
        <img
          src={require("@site/static/img/muneer-maroon.jpg").default}
          alt="Muneer Shafi - Professional Portrait"
          className="personal-image"
          loading="lazy"
        />

        <div className="card-content">
          <h2 className="card-title">
            <FaAddressCard style={{ marginRight: "0.5rem" }} />
            Personal Information
          </h2>

          <div className="personal-info-grid">
            <div className="info-item">
              <span className="info-label">Name</span>
              <span className="info-value">{personalInfo.name}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Date of Birth</span>
              <span className="info-value">{personalInfo.dob}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Address</span>
              <span className="info-value">{personalInfo.address}</span>
            </div>

            <div className="info-item">
              <span className="info-label">Email</span>
              <a
                className="info-link info-value"
                href={`mailto:${personalInfo.email}`}
                aria-label={`Send email to ${personalInfo.email}`}
              >
                {personalInfo.email}
              </a>
            </div>

            <div className="info-item">
              <span className="info-label">Phone</span>
              <a
                className="info-link info-value"
                href={`tel:${personalInfo.phone}`}
                aria-label={`Call ${personalInfo.phone}`}
              >
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </article>

      <Education />
    </section>
  );
};

const Education: React.FC<Props> = () => {
  return (
    <article className="personal-card">
      <img
        src={require("@site/static/img/university.jpg").default}
        alt="University of Kashmir Campus"
        className="personal-image"
        loading="lazy"
      />

      <div className="card-content">
        <h2 className="card-title">
          <FaSchool style={{ marginRight: "0.5rem" }} />
          Education Information
        </h2>

        <div className="education-list">
          {educationInfo.map((education, index) => (
            <div key={index} className="education-item">
              <div className="education-header">
                <FaSchool className="education-icon" size={20} />
                <h3 className="college-name">{education.college}</h3>
              </div>

              <p className="degree-info">{education.degree}</p>

              <div className="year-mode">
                {education.yearOfPassing} • {education.mode}
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default PersonalInfo;
