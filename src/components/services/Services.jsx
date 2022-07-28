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
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
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
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
                        <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
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
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <BsCheck  className="service__liste-icon"/>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services