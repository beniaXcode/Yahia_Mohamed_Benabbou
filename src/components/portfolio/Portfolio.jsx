import React from 'react';
import benia from "../../assets/project_benia.jpeg";
import blog from "../../assets/project_blogger.jpeg";
import coffee from "../../assets/project_coffee.jpeg";
import web3 from "../../assets/project_web3.jpeg";
import dashbord from "../../assets/project_dashbord.jpeg";
import e_com from "../../assets/project_e-com.jpeg";
import './portfolio.css'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="contair portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={blog} alt="" />
          </div>
          <h3>Blogger</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/beniaXcode/Blogger" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
            >
              Live Demo
            </a> */}
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={coffee} alt="" />
          </div>
          <h3>Coffee-shop</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/beniaXcode/coffee-shop" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
               
            >
              Live Demo
          </a>*/}
          </div> 
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={web3} alt="" />
          </div>
          <h3>web3-app</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/beniaXcode/web3-app" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
               
            >
              Live Demo
            </a> */}
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={e_com} alt="" />
          </div>
          <h3>E-commerce</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/beniaXcode/E-commerce" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
               
            >
              Live Demo
            </a> */}
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={dashbord} alt="" />
          </div>
          <h3>Dashbord</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com/beniaxcode/react-dashbord" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
               
            >
              Live Demo
            </a> */}
          </div>
        </article>        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={benia} alt="" />
          </div>
          <h3>Benia.me</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com/beniaxcode/YAHIA_MOHAMED" className="btn"  >
              Github
            </a>
            {/* <a
              href="https://benia.me"
              className="btn btn-primary"
               
            >
              Live Demo
            </a> */}
          </div>
        </article>
      </div>
    </section>
  ); 
}

export default Portfolio