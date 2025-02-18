import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const data = [
  {
    id: 1,
    skill: "Selenium",
    proficiency: "beginner",
  },
  {
    id: 2,
    skill: "Java",
    proficiency: "beginner",
  },
  {
    id: 3,
    skill: "Jira",
    proficiency: "Intermediate",
  },
  {
    id: 4,
    skill: "VS Code",
    proficiency: "Intermediate",
  },
  {
    id: 5,
    skill: "Postman",
    proficiency: "Intermediate",
  },
  {
    id: 6,
    skill: "Git",
    proficiency: "Intermediate",
  },
  {
    id: 7,
    skill: "BrowseStack",
    proficiency: "beginner",
  },
  {
    id: 9,
    skill: "Jenkins",
    proficiency: "beginner",
  },
  {
    id: 10,
    skill: "SQL",
    proficiency: "beginner",
  },

  {
    id: 11,
    skill: "PgAdmin",
    proficiency: "beginner",
  },
  {
    id: 12,
    skill: "Functions and Visual Testing",
    proficiency: "Intermediate",
  },
  {
    id: 13,
    skill: "gAndi",
    proficiency: "beginner",
  },
  {
    id: 14,
    skill: "HTML5",
    proficiency: "Intermediate",
  },
  {
    id: 15,
    skill: "CSS3",
    proficiency: "Intermediate",
  },
  {
    id: 16,
    skill: "JavaScript (ES6+)",
    proficiency: "Intermediate",
  },
  {
    id: 17,
    skill: "React.js",
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
