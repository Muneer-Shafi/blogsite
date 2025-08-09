import React from "react";
import "./personal.css";
import { FaAddressCard, FaSchool } from "react-icons/fa6";
import { educationInfo, personalInfo } from "@site/data/data";
type Props = {};

const PersonalInfo = () => {
  return (
    <div className="cols flex-center">
      <div className="cols  flex-center personal-card gap-lg">
        <img
          src={require("@site/static/img/brown_muneer.jpg").default}
          alt="Muneer"
          className="muneer-img"
        />

        <div>
          <h2 className="card-title">Personal Information</h2>
          <div className="rows gap-0">
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
              <a className="link" href={`mailto:${personalInfo.email}`}>
                {personalInfo.email}
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a className="link" href={`tel:${personalInfo.phone}`}>
                {personalInfo.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <Education />
    </div>
  );
};

function Education({}: Props) {
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
                <strong className="cols p-0 align-center">
                  <FaSchool size={20} />
                  {education.college}
                </strong>
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
