import Cta from "./Cta.jsx";
import "./header.css";
import Typewriter from "react-ts-typewriter";
import HeaderSocials from "./HeaderSocials.jsx";
function Header() {
  const me = `                   A dynamic DevOps engineer with a strong background in software and app development, cloud services, DevOps Concepts and mobile app development. Proficient in a wide range of programming languages, including Python, JavaScript, Rust, and Java, with expertise in front-end technologies like React and NextJS. I thrive on collaborating with teams to drive innovation and possess a solid foundation in both technical and soft skills. My educational background in Programmable Services, Systems & Networks further complements my ability to excel in various software engineering projects.                                                                                                                     `;
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Yahia Mohamed </h1>
        <h5 className="text-light">
        DevOps Engineer - Software Developer
        </h5>
        <Cta />
        <HeaderSocials />
        <div className="centring">
          <div className="hero">
            <Typewriter text={me} loop={false} speed={15} />
          </div>
        </div>
        <a href="#contact" className="scroll__down ">
          scroll down
        </a>
      </div>
    </header>
  );
}

export default Header;
