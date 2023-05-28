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
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="services__list-icon" />
              <p>Day to day responsibilities to build up the product module/feature end to end in front-end.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Design and review product architecture Modifies code to fix errors.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>
                Created high-quality mockups and prototypes. Making UI fully responsive across all browsers and device using CSS and
                StyleComponents.
              </p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Developed and implemented software solutions based on client requirements.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Tested and refined software prior to rollout.</p>
            </li>
            <li>
              <BiCheck className="services__list-icon" />
              <p>Released ad hoc product patches.</p>
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
