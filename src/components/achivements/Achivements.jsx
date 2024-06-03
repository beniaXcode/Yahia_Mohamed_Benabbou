import React from 'react';

import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";


import './achivements.css'

const Achivements = () => {
  return (
    <section>
      <h5>What I achieved</h5>
      <h2>Achivements</h2>
      <div className="contair portfolio__container">
      <article className="portfolio__item">
      <div className="portfolio__item-image">
            <img src={cert1} alt="" />
          </div>
          <h3 >
          <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=789B1B427D990E97A6D1061E667DF8B1306847E885E5280DCAD3992C311F5B60" className=""  >
          Oracle Cloud Infrastructure Certified DevOps Professional
            </a>
            </h3>
          <div className="portfolio__item-cta">
            <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=789B1B427D990E97A6D1061E667DF8B1306847E885E5280DCAD3992C311F5B60" className="btn"  >
              View Cert
            </a>
            {/* <a
              href="https://dribble.com"
              className="btn btn-primary"
               
            >
              Live Demo
            </a> */}
          </div>
        </article>
        <article className="portfolio__item">
      <div className="portfolio__item-image">
            <img src={cert2} alt="" />
          </div>
          <h3 className='achiv_title'>
          <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A447FC5BB4014292D606273619F0D92E3870BDCD5AC368544A93B2517329659E" className=""  >
          Oracle Cloud Infrastructure 2023 Certified Solutions Architect Associate
            </a>
            </h3>
          <div className="portfolio__item-cta">
            <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=A447FC5BB4014292D606273619F0D92E3870BDCD5AC368544A93B2517329659E" className="btn"  >
              View Cert
            </a>
            {/* <a
              href="https://dribble.com"
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

export default Achivements  