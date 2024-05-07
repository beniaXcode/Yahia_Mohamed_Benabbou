import React from 'react'
import Skills from './Skills.jsx'
import './experience.css'
function Expeience() {
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>SOFTWARE ENGINEERING </h3>
          <div className="experience__content">
            <Skills skill="Python programming" level="Experienced" />
            <Skills skill="java programming" level="intermediat" />
            <Skills skill="HTML" level="Experienced" />
            <Skills skill="CSS/Material UI/Tailwind CSS" level="Experienced" />
            <Skills skill="Tailwind CSS" level="Experienced" />
            <Skills skill="SASS/SCSS" level="Experienced" />
            <Skills skill="JavaScript" level="Experienced" />
            <Skills skill="Typecript" level="Experienced" />
            <Skills skill="React" level="Experienced" />
            <Skills skill="Django" level="Experienced" />
            <Skills skill="NextJS" level="Experienced" />
            <Skills skill="MongoDB" level="Experienced" />
            <Skills skill="MySQL/PostgerSql" level="Experienced" />
            <Skills skill="GraphQl" level="Experienced" />
            <Skills skill="Node js/Express" level="Experienced" />
            <Skills skill="Rest API" level="intermediat" />
          </div>
        </div>
        <div className="experience__frontend">
          <h3>DEVOPS</h3>
          <div className="experience__content">
            <Skills skill="AWS Services" level="Experienced" />
            <Skills skill="Oracle Cloud" level="Experienced" />
            <Skills skill="CI/CD Pipelines " level="Experienced" />
            <Skills skill="Docker" level="Experienced" />
            <Skills skill="Testing" level="intermediat" />
            <Skills skill="Gitlab" level="Experienced" />
            <Skills skill="Github Actions" level="Experienced" />
            <Skills skill="Linux" level="Experienced" />
            <Skills skill="TCP/IP" level="Experienced" />
            <Skills skill="Networking" level="Experienced" />
            <Skills skill="Bash Scripting" level="Experienced" />
            <Skills skill=" Systems administration " level="Experienced" />
            <Skills skill="Git" level="Experienced" />
            <Skills skill="Powershell" level="Experienced" />
            <Skills skill="Monitoringand Alerting" level="Experienced" />
            <Skills skill="Debugging" level="Experienced" />
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expeience