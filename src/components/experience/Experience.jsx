import React from 'react'
import Skills from './Skills.jsx'
import './experience.css'
function Expeience() {
  return (
    <section id="experience">
      <h5>What Ikills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Devlopment</h3>
          <div className="experience__content">
            <Skills skill="HTML" level="Experienced" />
            <Skills skill="CSS/Bootstrap/Tailwind" level="Experienced" />
            <Skills skill="TypeScript" level="Basic" />
            <Skills skill="JavaScript" level="Experienced" />
            <Skills skill="React/JQuery" level="Experienced" />
            <Skills skill="Redux/Context API" level="Basic" />
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            <Skills skill="Node js" level="intermediat" />
            <Skills skill="Express" level="intermediat" />
            <Skills skill="MongoDB/Firebase" level="Experienced" />
            <Skills skill="MySQL/PostgerSql" level="Experienced" />
            <Skills skill="Next js/GraphQl" level="Basic" />
            <Skills skill="Rest API" level="Basic" />
            <Skills skill="Django" level="intermediat" />
            <Skills skill="Spring" level="Basic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expeience