import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import kinsta from "../../Assets/Projects/Kinsta.png";
import allegiant from "../../Assets/Projects/Allegiant.png";
import artConnection from "../../Assets/Projects/ArtConnection.jpeg";
import artiSounds from "../../Assets/Projects/artisounds.jpeg";
import ravtech from "../../Assets/Projects/Ravtech.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong className="purple">Past Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Companies or projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kinsta}
              title="Kinsta"
              description="Full stack development and team leading. Working on creating from scratch a new integrated system to allow our team to take action on customers sites through-out our internal system."
              demoLink="https://kinsta.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={allegiant}
              title="Allegiant Air"
              description="Collaborated with cross-company UI teams to develop and complete a newly designed flights and hotels booking website using React JS."
              demoLink="https://allegiantair.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artConnection}
              title="ArtConnection"
              description="Developed a TypeScript-based eCommerce website using Stripe, designed to sell art and facilitate donations for homeless artists to sell their art."
              ghLink="https://github.com/yeruham58/art_conection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artiSounds}
              title="ArtiSounds"
              description="Developed a social network platform that enables musicians to create, share, and collaboratively record music tracks by layering their recordings on top of one another."
              ghLink="https://github.com/yeruham58/artisounds"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ravtech}
              title="Ravtech"
              description="Working on many different company projects, Using Angular5, JS, HTML ,CSS, Python, MySql and many different external APIs (as Google Translate, Google maps etc) .
              Working with teams in the agile method."
              demoLink="https://ravtech.co.il/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
