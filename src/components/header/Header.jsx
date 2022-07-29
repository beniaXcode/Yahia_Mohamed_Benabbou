import React from 'react'
import Cta from './Cta.jsx'
import './header.css'
/* import ME from "../../assets/me.png"*/
import HeaderSocials from './HeaderSocials.jsx'
function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Benabbou Mohamed Yahia</h1>
        <h5 className="text-light">Web Devlopper - AWS Solutions Architect</h5>
        <Cta />
        <HeaderSocials />
        <div className="hero">
        </div>
      </div>
      <a href="#contact" className="scroll__down ">
        {" "}
        scroll down{" "}
      </a>
    </header>
  );
}

export default Header