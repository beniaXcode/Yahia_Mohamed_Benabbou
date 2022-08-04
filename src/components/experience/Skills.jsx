import React from 'react'
import { BsPatchCheckFill } from "react-icons/bs";
function Skills(props) {
return (
  <article className="experience__details">
    <BsPatchCheckFill className="experience__details-icon" />
    <div>
      <h6>{props.skill}</h6>
      <small className="text-light">{props.level}</small>
    </div>
  </article>
);
}

export default Skills
