import React from 'react'
import {FaAward} from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
/* import me from '../../assets/me-about.jpg' */
import './about.css'
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
<div class="animation01">
        <div class="rhombus_small">
            <div class="rhombus">
                <div class="border_box">
                    <span class="line line01"></span>
                    <span class="line line02"></span>
                    <span class="line line03"></span>
                    <span class="line line04"></span>
                    <span class="circle circle01"></span>
                    <span class="circle circle02"></span>
                    <span class="circle circle03"></span>
                    <span class="circle circle04"></span>
                    <span class="animation_line animation_line01"></span>
                    <span class="animation_line_wrapper animation_line02_wrapper"><span class="animation_line animation_line02"></span></span>
                    <span class="animation_line animation_line03"></span>
                    <span class="animation_line_wrapper animation_line04_wrapper"><span class="animation_line animation_line04"></span></span>
                    <span class="animation_line animation_line05"></span>
                    <span class="animation_line_wrapper animation_line06_wrapper"><span class="animation_line animation_line06"></span></span>
                    <span class="animation_line animation_line07"></span>
                    <span class="animation_line_wrapper animation_line08_wrapper"><span class="animation_line animation_line08"></span></span>
                </div>
                <div class="wave">
                    <div class="wave_wrapper"><div class="wave_box"></div></div>
                </div>
            </div>
        </div>
    </div>
    <div class="animation02">
        <div class="rhombus_box">
            <span class="rhombus_item_wrapper rhombus_item01_wrapper"><span class="rhombus_item"></span></span>
            <span class="rhombus_item_wrapper rhombus_item02_wrapper"><span class="rhombus_item"></span></span>
        </div>
        <div class="double_content">
            <div class="double_wrapper02 dotted02"><div class="dotted_hide"><div class="double_wrapper01 dotted01"><span class="dotted_right"></span></div></div></div>
            <div class="double_wrapper02 white02"><div class="double_wrapper01 white01"></div></div>
            <div class="double_wrapper02 gray02"><div class="double_wrapper01 gray01"></div></div>
            <div class="double_wrapper02 orange02"><div class="double_wrapper01 orange01"></div></div>
        </div>
        <div class="name">
            <p>Benia.me</p>
            <span class="name_circle01"></span>
            <span class="name_circle02"></span>
        </div>
    </div>
        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+years working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>16+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>15+ completed projects</small>
            </article>

          </div>
          <p>
            <p className='about__me-sumary'>❖ I am a software developer, specialising in the app development area. For the last 3 years, I have been developing software/Websites/mobile apps using python, Java, SQL programming languages , and my preferred stack is MERN.</p>
            
            <p className='about__me-sumary'> ❖ I’m currently employed as software developer at OLLMOO. I’m hands on in all stages of the software development cycle, from planning and design to testing and deployment. my tasks may involve analysing algorithms, altering code, fixing bugs, brainstorming ideas or integrating new systems.</p>

            <p className='about__me-sumary'>❖ With a school background more focused on programmable services, systems and networks , and my last AWS solutions architect certification I'm also more oriented toward the DevOps/Cloud Field. By understanding the development process of an IT product from planning to monitoring.</p>
            


          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>     
    </section>
  );
}

export default About