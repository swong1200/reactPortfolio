import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

function Portfolio() {
  return (
    <div>
      <Hero backgroundImage="https://www.thoughtco.com/thmb/9-iCj7lj21Dd8zFGWnbiVzhi5n8=/1333x1000/smart/filters:no_upscale()/clouds-5b6b4e50c9e77c0050491212.jpg">
        <h1>Stuart Wong</h1>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To My Portfolio!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
