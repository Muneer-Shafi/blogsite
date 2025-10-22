export {
  personalInfo,
  otherSkills,
  educationInfo,
  frontendSkills,
  backendSkills,
  socialLinks,
};

const personalInfo = {
  name: "Muneer Shafi",
  dob: "March 3, 1997",
  address: "Pampore, Jammu and Kashmir, India",
  email: "mcamuneershafi@gmail.com",
  phone: "+919906403770",
};

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Muneer-Shafi",
    icon: "github",
    color: "#333",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/muneer-shafi",
    icon: "linkedin",
    color: "#0077b5",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/zahid__muneer",
    icon: "twitter",
    color: "#1da1f2",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/muneer__shafi",
    icon: "instagram",
    color: "#e4405f",
  },
  {
    name: "Email",
    url: "mailto:mcamuneershafi@gmail.com",
    icon: "envelope",
    color: "#ea4335",
  },
];

const educationInfo = [
  {
    college: "University of Kashmir",
    degree: "Masters in Computer Applications",
    yearOfPassing: "March 2021",
    university: "University of Kashmir",
    mode: "Regular",
  },
  {
    college: "University of Kashmir",
    degree: "Bachelors in Computer Applications",
    yearOfPassing: "June 2017",
    university: "University of Kashmir",
    mode: "Regular",
  },
];

const frontendSkills = [
  { name: "Html/Css", level: 90 },
  { name: "JavaScript/Typescript", level: 85 },
  { name: "React", level: 80 },
  { name: "Bootstrap", level: 75 },
];
const backendSkills = [
  { name: "Php (symfony) ", level: 90 },
  { name: "Python (django)", level: 60 },
  { name: "Node.js", level: 80 },
  { name: "GraphQL", level: 70 },
  { name: "RESTful APIs", level: 70 },
];

const otherSkills = [
  { name: "SQL" },
  { name: "PostgreSQL" },
  { name: "Docker" },
  { name: "Git and Github" },
  { name: "Test Driven Development" },
  { name: "Agile Methodologies" },
  { name: "Jira" },
];
