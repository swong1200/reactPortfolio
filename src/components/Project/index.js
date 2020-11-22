import React from "react";
import "./style.css";
import github from "../../images/github.png"
import Row from "../Row";

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
      <br></br>
      <Row className="row">
      <p>{props.name}</p>
      <a href={props.github}><img className="image" src={github} alt={props.name}/></a>
      </Row>
    </div>
  );
}

export default Project;
