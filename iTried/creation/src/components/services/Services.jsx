import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* End of ui/ux */}
        <article className="service">
          <div className="service__head">
            <h3>Quality Assurance Engineer</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I offer in-depth manual testing to ensure the functionality,
                usability, and stability of applications. This includes test
                case creation, execution, and documentation to identify defects
                before production.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I perform functional testing to validate that the application’s
                features work as expected according to the requirements. This
                includes testing user interactions, workflows, and overall
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I perform regression testing to ensure that new changes, bug
                fixes, or features don't negatively affect existing
                functionality, ensuring the stability of the application
                throughout the development lifecycle.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I evaluate the application's usability to ensure it provides an
                intuitive and user-friendly experience. I focus on navigation,
                design elements, and ease of use to ensure it aligns with user
                expectations.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I conduct exploratory testing to identify issues that may not be
                covered by test cases or automated scripts. This approach
                leverages creativity and experience to uncover hidden defects or
                unexpected behaviors.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                I thoroughly document and report bugs or issues using
                bug-tracking tools like JIRA or Trello, providing detailed steps
                to reproduce the issue and working closely with developers to
                facilitate quick resolution.
              </p>
            </li>
          </ul>
        </article>
        {/* <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
            </li>
          </ul>
        </article> */}
        {/* End of Content Creation */}
      </div>
    </section>
  );
}

export default Services;
