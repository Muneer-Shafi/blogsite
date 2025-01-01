import React from "react";
import "./skillSet.css";
import {
  FaBootstrap,
  FaDatabase,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa6";
type Props = {};

const SkillBar = ({ name, level, icon, index }) => {
  return (
    <div className="skill-item">
      <div className="skill-header">
          <div className="cols align-center">
            {icon}
            <strong>{name}</strong>
          </div>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${level}%` }}>
          <div className="shine"></div>
        </div>
      </div>
    </div>
  );
};

export default function SkillSet({}: Props) {
  const backEndSkills = [
    { name: "Php (symfony) ", level: 90, icon: <FaPhp /> },
    { name: "Python (django)", level: 60, icon: <FaPython /> },
    { name: "Node.js", level: 80, icon: <FaJs /> },
    { name: "SQL", level: 75, icon: <FaDatabase /> },
  ];
  const frontEndSkills = [
    { name: "Html/Css", level: 90, icon: <FaHtml5 /> },
    { name: "JavaScript/Typescript", level: 85, icon: <FaJs /> },
    { name: "React", level: 80, icon: <FaReact /> },
    { name: "Bootstrap", level: 75, icon: <FaBootstrap /> },
  ];

  return (
    <div className="grid-container">
      <div className="rows white-card">
        <h2 className="cols gap-md">Professional backend Skills</h2>
        <div className="">
          {backEndSkills.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
      <div className="rows white-card">
        <h2 className="cols gap-md">Professional frontend Skills</h2>
        <div className="">
          {frontEndSkills.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
