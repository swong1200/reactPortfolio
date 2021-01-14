import React from "react";
import "./style.css";
import github from "../../images/github.png";
import Row from "../Row";
import Col from "../Col";

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
      <Row>
        <Col size="md-6">
          <p>{props.name}</p>
        </Col>
        <Col size="md-6">
          <a href={props.github}>
            <img className="image" src={github} alt={props.name} />
          </a>
        </Col>
      </Row>
    </div>
  );
}

export default Project;
