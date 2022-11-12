import Cta from './Cta.jsx'
import './header.css'
import Typewriter from 'react-ts-typewriter';
import HeaderSocials from './HeaderSocials.jsx'
function Header() {
  const me = `                   I'm a software engineer specializing in building (and designing) secure and high performance websites, applications, mobile applications and everything in between. Also, I'm passionate about Cloud computing and DevOps. Currently, I'm a freelancer focused on building high quality software solutions.                                                                                                                     `
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1> Yahia Mohamed </h1>
        <h5 className="text-light">Software Engineer @ <a href="https://www.ollmoo.com/" rel="noreferrer" target="_blank">OLLMOO</a> - AWS Certified Solutions Architect</h5>
        <Cta />
        <HeaderSocials />
        <div className='centring'>
        <div className="hero">
          <Typewriter
            text={me} loop={false} speed={15}
          />
        </div>
        </div>
      <a href="#contact" className="scroll__down ">scroll down</a>
      </div>
    </header>
  );
}

export default Header