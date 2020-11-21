import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import projects from "../utils/projects.json";
import ArtistHop from "../images/AH1.png";
import Burger from "../images/burger.png";
import NoteTaker from "../images/notetaker.png";
import PassGen from "../images/passgen.png";
import Puckman from "../images/puckman.png";
import Scheduler from "../images/scheduler.png";

function Portfolio() {

    return (
      <div>
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Welcome To My Portfolio</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <Project
                image={PassGen}
                href={projects[0].href}
                name={projects[0].name}
              />
            </Col>
            <Col size="md-4">
              <Project
                image={Scheduler}
                href={projects[1].href}
                name={projects[1].name}
              />
            </Col>
            <Col size="md-4">
              <Project
                image={ArtistHop}
                href={projects[2].href}
                name={projects[2].name}
              />
            </Col>
          </Row>
          <Row>
            <Col size="md-4">
              <Project
                image={NoteTaker}
                href={projects[3].href}
                name={projects[3].name}
              />
            </Col>
            <Col size="md-4">
              <Project
                image={Burger}
                href={projects[4].href}
                name={projects[4].name}
              />
            </Col>
            <Col size="md-4">
              <Project
                image={Puckman}
                href={projects[5].href}
                name={projects[5].name}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

export default Portfolio;
