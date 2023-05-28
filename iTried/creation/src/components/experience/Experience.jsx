import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const data = [
  {
    id: 1,
    skill: "HTML5",
    proficiency: "Intermediate",
  },
  {
    id: 2,
    skill: "CSS3",
    proficiency: "Intermediate",
  },
  {
    id: 3,
    skill: "JavaScript (ES6+)",
    proficiency: "Intermediate",
  },
  {
    id: 4,
    skill: "React.js",
    proficiency: "Intermediate",
  },
  {
    id: 5,
    skill: "Responsive Web Design",
    proficiency: "Intermediate",
  },
  {
    id: 6,
    skill: "Version Control (Git)",
    proficiency: "Intermediate",
  },
  {
    id: 7,
    skill: "Package Managers",
    proficiency: "Intermediate",
  },
  {
    id: 8,
    skill: "Testing and Debugging",
    proficiency: "Intermediate",
  },
  {
    id: 9,
    skill: "Styled-Components",
    proficiency: "Intermediate",
  },
  {
    id: 10,
    skill: "Material-Ui",
    proficiency: "Intermediate",
  },
  {
    id: 10,
    skill: "Jira",
    proficiency: "beginner",
  },
  {
    id: 11,
    skill: "Nodejs",
    proficiency: "beginner",
  },
];
function Experience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Professional Skills</h3>
          <div className="experience__content">
            {data.map(({ id, skill, proficiency }) => {
              return (
                <article className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{skill}</h4>
                    <small className="text-light">{proficiency}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* End of frontend */}
        {/* <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Node js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React js</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Experience;
