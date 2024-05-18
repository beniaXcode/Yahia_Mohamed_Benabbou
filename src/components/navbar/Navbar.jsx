import React from 'react'
import {AiOutlineHome} from "react-icons/ai";
import {AiOutlineUser} from "react-icons/ai";
import {BiBook} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";
import { FaBlog } from "react-icons/fa";
import {BiMessageSquareDetail} from "react-icons/bi";
import {useState} from 'react'
import './navbar.css'
function Navbar() {
  const [activeNav,setActiveNav]=useState('#')
  return (
    <nav>
      <a
        href="#home"
        className={activeNav === "#" ? "active" : ""}
        onClick={() => setActiveNav("#")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <a
        href="https://nearvic.com"
        onClick={() => setActiveNav("#contact")}
        className={""}
        target='_blank'
      >
        <FaBlog />
      </a>
    </nav>
  );
}

export default Navbar