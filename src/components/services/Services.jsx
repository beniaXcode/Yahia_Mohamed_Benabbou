import React from 'react'
import { BsCheck    } from "react-icons/bs";
import './services.css'
function Services() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
                        <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Cross-platform experiences design</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Interface architecture</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Sketching & Wireframes</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Dynamic prototype</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Editing</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Design review</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Web Devlopement</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>
SaaS Development</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Design APIS</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Pentesting</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Search Engine Optimization (SEO)</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Software Testing</p>
            </li>
                        <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Database Development</p>
            </li>
          </ul>
        </article>


        <article className="service">
          <div className="service__head">
            <h3>Cloud Architecture</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p> secure Architecture </p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p> Reliable Architecture </p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p> High Performance & Efficiency Architecture </p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Operational Excellence Architecture </p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Migration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services