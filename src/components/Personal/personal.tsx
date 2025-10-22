import React, { useMemo } from "react";
import "./personal.css";
import {
  FaAddressCard,
  FaSchool,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCakeCandles,
  FaLocationDot,
  FaEnvelope as FaMail,
  FaPhone,
  FaUser,
} from "react-icons/fa6";
import { educationInfo, personalInfo, socialLinks } from "@site/data/data";

type Props = {};

const PersonalInfo: React.FC = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "envelope":
        return <FaEnvelope />;
      default:
        return <FaEnvelope />;
    }
  };

  // Calculate age dynamically
  const age = useMemo(() => {
    const birthDate = new Date(personalInfo.dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }, [personalInfo.dob]);

  return (
    <section className="personal-container">
      <article className="personal-card main-card">
        <div className="image-container">
          <img
            src={require("@site/static/img/muneer-maroon.jpg").default}
            alt="Muneer Shafi - Professional Portrait"
            className="personal-image"
            loading="lazy"
          />
          <div className="image-overlay">
            <div className="image-glow"></div>
          </div>
        </div>

        <div className="card-content">
          <div className="title-section">
            <h2 className="card-title">
              <FaAddressCard style={{ marginRight: "0.5rem" }} />
              Personal Information
            </h2>
            <div className="title-decoration"></div>
          </div>

          <div className="personal-info-grid">
            <div className="info-item featured">
              <div className="info-icon">
                <FaUser />
              </div>
              <div className="info-content">
                <span className="info-label">Name</span>
                <span className="info-value">{personalInfo.name}</span>
              </div>
            </div>

            <div className="info-item featured">
              <div className="info-icon">
                <FaCakeCandles />
              </div>
              <div className="info-content">
                <span className="info-label">Age</span>
                <span className="info-value">{age} years old</span>
              </div>
            </div>

            <div className="info-item featured">
              <div className="info-icon">
                <FaLocationDot />
              </div>
              <div className="info-content">
                <span className="info-label">Location</span>
                <span className="info-value">{personalInfo.address}</span>
              </div>
            </div>

            <div className="info-item featured">
              <div className="info-icon">
                <FaMail />
              </div>
              <div className="info-content">
                <span className="info-label">Email</span>
                <a
                  className="info-link info-value"
                  href={`mailto:${personalInfo.email}`}
                  aria-label={`Send email to ${personalInfo.email}`}
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>

            <div className="info-item featured">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
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

          {/* Social Media Links */}
          <div className="social-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-link"
                  style={
                    { "--social-color": social.color } as React.CSSProperties
                  }
                  aria-label={`Visit ${social.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    {getSocialIcon(social.icon)}
                  </span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
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
