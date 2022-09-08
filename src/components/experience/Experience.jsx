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
            <Skills skill="CSS/Bootstrap" level="Experienced" />
            <Skills skill="Tailwind" level="Experienced" />
            <Skills skill="SASS/SCSS" level="Experienced" />
            <Skills skill="Material UI" level="Experienced" />
            <Skills skill="JavaScript" level="Experienced" />
            <Skills skill="Typecript" level="Experienced" />
            <Skills skill="React" level="Experienced" />
            <Skills skill="JQuery" level="Experienced" />
            <Skills skill="Redux/Context API" level="Experienced" />
            <Skills skill="NextJS" level="Experienced" />
            <Skills skill="Figma" level="intermediat" />
            <Skills skill="styled Comp" level="Experienced" />
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Backend Devlopment</h3>
          <div className="experience__content">
            <Skills skill="MongoDB" level="Experienced" />
            <Skills skill="MySQL" level="Experienced" />
            <Skills skill="PostgerSql" level="Experienced" />
            <Skills skill="GraphQl" level="intermediat" />
            <Skills skill="Testing" level="intermediat" />
            <Skills skill="Node js" level="Experienced" />
            <Skills skill="Express" level="Experienced" />
            <Skills skill="PHP" level="Basic" />
            <Skills skill="AWS Hosting" level="Experienced" />
            <Skills skill="Rest API" level="Experienced" />
            <Skills skill=" CI/CD" level="intermediat" />
            <Skills skill="Django" level="Basic" />
            <Skills skill="Flask" level="Basic" />
            <Skills skill="Git/Github" level="Experienced" />
            <Skills skill="Debugging" level="Experienced" />
            <Skills skill="Troubleshooting" level="Experienced" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expeience