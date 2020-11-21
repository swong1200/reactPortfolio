import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div>
      <a href={props.href}>
        <div
          className="project"
          style={{
            backgroundImage: props.image ? `url(${props.image})` : "none",
          }}
        ></div>
      </a>
      <a href={props.github}>{props.name}</a>
    </div>
  );
}

export default Project;
