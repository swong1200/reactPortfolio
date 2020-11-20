import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";

function Portfolio() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Project />
          </Col>
          <Col size="md-6">
            <Project />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Project />
          </Col>
          <Col size="md-6">
            <Project />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Project />
          </Col>
          <Col size="md-6">
            <Project />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
