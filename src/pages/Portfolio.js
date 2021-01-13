import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Project from "../components/Project";
import projects from "../utils/projects.json";
import ArtistHop from "../images/AH1.png";
import Burger from "../images/burger.png";
import NoteTaker from "../images/notetaker.png";
import NewsCycle from "../images/newscycle.png";
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
          <Col size="md-6">
            <Project
              image={NewsCycle}
              href={projects[0].href}
              name={projects[0].name}
              github={projects[0].github}
            />
          </Col>
          <Col size="md-6">
            <Project
              image={Scheduler}
              href={projects[1].href}
              name={projects[1].name}
              github={projects[1].github}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Project
              image={ArtistHop}
              href={projects[2].href}
              name={projects[2].name}
              github={projects[2].github}
            />
          </Col>
          <Col size="md-6">
            <Project
              image={NoteTaker}
              href={projects[3].href}
              name={projects[3].name}
              github={projects[3].github}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-6">
            <Project
              image={Burger}
              href={projects[4].href}
              name={projects[4].name}
              github={projects[4].github}
            />
          </Col>
          <Col size="md-6">
            <Project
              image={Puckman}
              href={projects[5].href}
              name={projects[5].name}
              github={projects[5].github}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Portfolio;
