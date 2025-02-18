import React from "react";
import "./about.css";
import Test from "../../assets/testingpic.jpg";
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
            <img src={Test} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>3 Years Working Experience</small>
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
            I am an experienced and innovative QA Tester with 3 years of
            hands-on experience, specializing in ensuring the quality and
            functionality of web applications. Skilled in identifying and
            resolving bugs, conducting thorough testing, and ensuring seamless
            user experiences.
            <br />
            <br />
            Proficient in testing methodologies including manual testing,
            automation, regression testing, and functional testing. Experienced
            with tools like Selenium, Jest, Mocha, and others for automating
            test cases and maintaining test scripts. Adept at working closely
            with development teams to ensure high-quality releases and timely
            project delivery. Committed to providing efficient, high-quality
            testing solutions through detailed attention to detail,
            comprehensive test cases, and clear documentation. I continuously
            stay updated with the latest trends and best practices in QA testing
            to contribute to the success of dynamic, forward-thinking teamsce,
            specializing in creating modern and engaging user interfaces.
            Skilled in translating design concepts into intuitive and responsive
            web applications.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
