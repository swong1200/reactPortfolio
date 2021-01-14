import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About Me</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              I'm a Full Stack Developer with a Bachelor’s degree in psychology,
              educated at UCLA. I recently earned a certificate in full stack
              web development from UCLA Extension, with newly developed skills
              in Javascript, JQuery, React.js, Node.js, MySQL and MongoDB. Known
              as an extremely hard worker fascinated by solving new problems, my
              aim is to develop apps that are intuitive and user-friendly. I
              recently worked with a team of four to develop an HTML5 game using
              a physics engine in two weeks. Passionate about learning new
              skills, my goal is to create innovative apps that push the
              boundaries of the web development world. I’m excited to become a
              member of a fast-paced, quality-driven team that can help me
              expand my knowledge.
            </p>
            <p>
              I was born in Los Angeles, CA and still live here, in West LA. I
              live with my girlfriend and two dogs. I am currently seeking out
              new opportunities and learning to be a better full-stack web
              developer everyday.
            </p>
            <p>
              When I'm not designing or developing, I enjoy outdoor activities
              like hiking and rock climbing. I also enjoy sports like basketball
              and softball. However, I currently spend a lot of time indoors
              playing video games and improving my coding skills during the
              quarantine. I cannot wait to get outside again and go for a hike
              with my dogs!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
