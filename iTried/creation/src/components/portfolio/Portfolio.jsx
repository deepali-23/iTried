import React from "react";
import "./portfolio.css";
import dropsImage from "../../assets/dropsImage.png";
import dashboard from "../../assets/dashboard.png";
import Network from "../../assets/networks.png";
import About from "../../assets/about.png";
const data = [
  {
    id: 1,
    image: dashboard,
    title: "Dashboard App",
    github: "https://github.com/deepali-23/react_dashboard",
    description: "React Dashboard App",
    demo: "https://644f8b99ba939e751ea960ac--glittering-sprinkles-dc839c.netlify.app",
  },
  {
    id: 2,
    image: Network,
    title: "XDC Network Stats Dashboard",
    github: "https://github.com",
    description: "XDC Network Stats Application",
    demo: "https://stats.xdc.org/",
  },
  {
    id: 3,
    image: About,
    title: "Portfolio",
    github: "https://github.com/deepali-23/iTried",
    description: "Responsive Portfolio",
    demo: "",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, description, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>{description}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} classsName="btn" target="__blank">
                    Github
                  </a>
                  <a href={demo} classsName="btn btn-primary" target="__blank">
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
