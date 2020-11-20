import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Contact() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Contact Info:</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p className="lead">(310) 913-0661</p>
          <p className="lead">swong31@gmail.com</p>
          <a className="lead" href="https://github.com/swong1200">Github</a>
          <br />
          <a className="lead" href="https://www.linkedin.com/in/stuart-wong-10255020">LinkedIn</a>
          <br />
          <a className="lead" href="https://docs.google.com/document/d/1lXd5YIjb3LpXZ9dp-CHPd3mue11AnwSjhtNE-UY8z2A/edit?usp=sharing">Resume</a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;