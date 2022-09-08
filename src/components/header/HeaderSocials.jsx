import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/yahia-mohamed-benabbou-678a78222/" targer="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/beniaXcode" targer="_blank">
        <FaGithub />
      </a>
      <a href="https://stackoverflow.com/users/18318935/yahia" targer="_blank">
        <FaStackOverflow />
      </a>
    </div>
  );
}

export default HeaderSocials
