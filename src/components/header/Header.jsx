import React from 'react'
import Cta from './Cta.jsx'
import './header.css'
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials.jsx'
function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Benabbou Yahia Mohamed</h1>
        <h5 className="text-light">Full stack Devlopper</h5>
        <Cta />
        <HeaderSocials />
        <div className="hero">
          <img src={ME} alt="" srcset="" />
        </div>
        </div>
        <a href="#contact" className="scroll__down "> scroll down </a>
    </header>
  );
}

export default Header