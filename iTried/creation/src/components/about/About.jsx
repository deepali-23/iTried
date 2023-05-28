import React from "react";
import "./about.css";
import Mern from "../../assets/Mern.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Mern} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>1.8 Years Working Experience</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>worked under many clients </small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>completed many projects</small>
            </article>

            {/* <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a> */}
          </div>
          <p>
            Hello, I'm Deepali Sharma, Passionate and innovative frontend developer with 1.6  years of experience, specializing in creating modern and engaging user
            interfaces. Skilled in translating design concepts into intuitive and responsive web applications.
            <br />
            <br/>
            Proficient in HTML, CSS, and
            JavaScript, with expertise in popular frontend frameworks such as React. Excels in collaborating with
            cross-functional teams to deliver high-quality projects on time. Dedicated to staying updated with the latest industry trends
            and technologies to ensure cutting-edge solutions. Committed to delivering exceptional user experiences through clean and
            maintainable code. Seeking new opportunities to leverage my skills and contribute to the success of dynamic and forward-thinking
            organizations."
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
