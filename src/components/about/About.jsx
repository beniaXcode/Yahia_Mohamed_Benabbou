import React from "react";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { IoSchool } from "react-icons/io5";
/* import me from '../../assets/me-about.jpg' */
import "./about.css";
function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        {/* <div className="about__me">
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
                  <span class="animation_line_wrapper animation_line02_wrapper">
                    <span class="animation_line animation_line02"></span>
                  </span>
                  <span class="animation_line animation_line03"></span>
                  <span class="animation_line_wrapper animation_line04_wrapper">
                    <span class="animation_line animation_line04"></span>
                  </span>
                  <span class="animation_line animation_line05"></span>
                  <span class="animation_line_wrapper animation_line06_wrapper">
                    <span class="animation_line animation_line06"></span>
                  </span>
                  <span class="animation_line animation_line07"></span>
                  <span class="animation_line_wrapper animation_line08_wrapper">
                    <span class="animation_line animation_line08"></span>
                  </span>
                </div>
                <div class="wave">
                  <div class="wave_wrapper">
                    <div class="wave_box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="animation02">
            <div class="rhombus_box">
              <span class="rhombus_item_wrapper rhombus_item01_wrapper">
                <span class="rhombus_item"></span>
              </span>
              <span class="rhombus_item_wrapper rhombus_item02_wrapper">
                <span class="rhombus_item"></span>
              </span>
            </div>
            <div class="double_content">
              <div class="double_wrapper02 dotted02">
                <div class="dotted_hide">
                  <div class="double_wrapper01 dotted01">
                    <span class="dotted_right"></span>
                  </div>
                </div>
              </div>
              <div class="double_wrapper02 white02">
                <div class="double_wrapper01 white01"></div>
              </div>
              <div class="double_wrapper02 gray02">
                <div class="double_wrapper01 gray01"></div>
              </div>
              <div class="double_wrapper02 orange02">
                <div class="double_wrapper01 orange01"></div>
              </div>
            </div>
            <div class="name">
              <p>Benia.me</p>
              <span class="name_circle01"></span>
              <span class="name_circle02"></span>
            </div>
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+years working</small>
            </article>

            <article className="about__card">
              <IoSchool className="about__icon" />
              <h5>Eduction</h5>
              <small>Bachelor of Engineering Computer science</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ completed projects</small>
            </article>
          </div>
          <p>
            <p className="about__me-sumary">
              ❖ I am a passionate and dynamic Cloud & DevSecOps Engineer with a robust background in software development, cloud services, and DevOps concepts. My technical expertise spans a wide range of programming languages, including Python, Java, Rust, and C++, along with a strong proficiency in cloud platforms like AWS, Oracle Cloud Infrastructure (OCI), and OpenStack.
            </p>

            <p className="about__me-sumary">
              {" "}
              <h4>❖Cloud Infrastructure and DevOps Skills</h4>
              
<ul>
  <li><span className="about_skill_cat">Cloud Platforms:</span>  OCI, AWS, OpenStack, VMware, Nutanix</li>
  <li><span className="about_skill_cat">DevOps Tools:</span> Docker, Kubernetes, Jenkins, Terraform, Ansible, Grafana, Docker, Kubernetes</li>
  <li><span className="about_skill_cat">Systems & Networks Administration:</span> Linux, Git, Bash, OpenShift, TCP/IP</li>
  <li><span className="about_skill_cat">Automation & CI/CD:</span>   Jenkins, GitHub Actions, GitLab, Serverless Framework, Terraform
</li>
  <li><span className="about_skill_cat">Security Practices:</span>  Container image scanning, secrets management, network segmentation, IAM  
</li>
</ul>

 
 
            </p>

            <p className="about__me-sumary">
              ❖ I am currently pursuing a Bachelor of Engineering in Programmable Services, Systems & Networks at the National School of Applied Science of Marrakesh. My coursework covers comprehensive topics such as DevSecOps best practices, system administration, Software Engineering , network administration, and AI/ML, providing a solid foundation for my technical pursuits.
            </p>
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
