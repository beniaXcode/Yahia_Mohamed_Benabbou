import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaStackOverflow } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com" targer="_blank">
        <BsLinkedin />
      </a>
      <a href="https://linkedin.com" targer="_blank">
        <FaGithub />
      </a>
      <a href="https://stackoverflow.co" targer="_blank">
        <FaStackOverflow />
      </a>
    </div>
  );
}

export default HeaderSocials
