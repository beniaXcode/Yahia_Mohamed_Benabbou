import React from 'react';
import proj1 from "../../assets/web2.png";
import './portfolio.css'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="contair portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={proj1} alt="" />
          </div>
          <h3>E-comerce WebSite</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Github
            </a>
            <a
              href="https://dribble.com"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  ); 
}

export default Portfolio