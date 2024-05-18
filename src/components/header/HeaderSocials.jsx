import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yahia-mohamed-benabbou/" targer="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/beniaXcode" targer="_blank">
        <FaGithub />
      </a>
      <a href="https://nearvic.com" targer="_blank">
        <FaBlog />
      </a>
    </div>
  );
}

export default HeaderSocials
