import React from 'react'
import './footer.css'
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BiCopyright } from "react-icons/bi";
function Footer() {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Yahia Mohamed Benabbou
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
       {/*<li>
          <a href="#testemonials">Testemonials</a>
        </li>*/}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com">
          <BsInstagram />
        </a>
        <a href="https://twitter.com/yahiamohamedbe1">
          <FiTwitter />
        </a>
      </div>
      <div className="footer_copuright">
        <small><BiCopyright/> Benia All right reserved</small>
      </div>
    </footer>
  );
}

export default Footer
