import React from "react";
import "./skillSet.css";
import { FaBootstrap, FaDatabase, FaHtml5, FaJs, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa6";
type Props = {};

const SkillBar = ({ name, level, icon, index }) => {
  const style = {
    animation: `slideIn 0.5s ease forwards ${index * 0.1}s`,
    opacity: 0,
  };

  return (
    <div className="skill-item" style={style}>
      <div className="skill-header">
        <div className="skill-icon-name">
          <div className="icon-container">{icon}</div>
          <span className="skill-name">{name}</span>
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
    <div className="cols flex-center">
      <div className="skills-container">
        <h2 className="skills-title">Professional  backend Skills</h2>
        <div className="skills-grid">
          {backEndSkills.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
      <div className="skills-container">
        <h2 className="skills-title">Professional frontend Skills</h2>
        <div className="skills-grid">
          {frontEndSkills.map((skill, index) => (
            <SkillBar key={skill.name} {...skill} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
