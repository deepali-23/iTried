import React from "react";
import "./portfolio.css";
import dropsImage from "../../assets/dropsImage.png";

const data = [
  {
    id: 1,
    image: dropsImage,
    title: "Crypto",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 2,
    image: dropsImage,
    title: "Crypto",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 3,
    image: dropsImage,
    title: "Crypto",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 4,
    image: dropsImage,
    title: "Crypto",
    github: "https://github.com",
    demo: "",
  },
  {
    id: 5,
    image: dropsImage,
    title: "Crypto",
    github: "https://github.com",
    demo: "",
  },
];

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                <h3>This is a portfolio item title</h3>
                <div className="portfolio__item-cta">
                  <a href={github} classsName="btn" target="__blank">
                    Github
                  </a>
                  <a
                    href={demo}
                    classsName="btn btn-primary"
                    target="__blank"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
            )
          })
        }
       
      </div>
    </section>
  );
}

export default Portfolio;
