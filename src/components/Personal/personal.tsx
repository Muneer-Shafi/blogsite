import React from "react";
import "./personal.css";
type Props = {};

const PersonalInfo = () => {
  const personalInfo = {
    name: "Muneer Shafi",
    dob: "March 3, 1997",
    address: "Pampore, Jammu and Kashmir, India",
    email: "mcamuneershafi@gmail.com",
    phone: "+919906403770",
  };

  return (
    <div className="cols flex-center">
      <div className="cols  flex-center personal-card gap-lg">
        <img
          src={require("@site/static/img/muneer.jpg").default}
          alt="Muneer"
          className="muneer-img"
        />

        <div>
          <h2 className="card-title">Personal Information</h2>
          <div className="card-content">
            <p>
              <strong>Name:</strong> {personalInfo.name}
            </p>
            <p>
              <strong>Date of Birth:</strong> {personalInfo.dob}
            </p>
            <p>
              <strong>Address:</strong> {personalInfo.address}
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            </p>
          </div>
        </div>
      </div>
      <Education />
    </div>
  );
};

function Education({}: Props) {
  const educationInfo = [
    {
      college: "University of Kashmir",
      degree: "Masters in Computer Applications",
      yearOfPassing: "December 2020",
      university: "University of Kashmir",
      mode: "Regular",
    },
    {
      college: "University of Kashmir",
      degree: "Bachelors in Computer Applications",
      yearOfPassing: "january 2017",
      university: "University of Kashmir",
      mode: "Regular",
    },
  ];
  return (
    <div className="cols  flex-center personal-card gap-lg">
      <img
        src={require("@site/static/img/university.jpg").default}
        alt="university of kashmir"
        className="muneer-img"
      />

      <div>
        <h2 className="card-title">Education information</h2>
        <div className="rows">
          {educationInfo.map((education, index) => (
            <div key={index}>
              <p>
                {index + 1}. <strong>{education.college}</strong>
              </p>
              <i>{education.degree}</i>
              <br />
              <i>
                {education.yearOfPassing} {education.mode}
              </i>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
