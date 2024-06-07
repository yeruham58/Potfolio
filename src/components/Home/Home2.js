import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import myImg1 from "../../Assets/profile_img.jpeg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A FEW WORDS <span className="purple"> ABOUT MYSELF</span>
            </h1>
            <p className="home-about-body">
              I love learning new things and challenge myself over and over again.
              <br />
              <br />I am working mainly with
              <i>
                <b className="purple"> Javascript, Typescript and Node.js </b>
              </i>
              Including modern JS frameworks <i> <b className="purple"> (React)</b></i>
              <br />
              <br />
              My interest and passion will increase significantly when working on tools that tend to
              <i>
                <b className="purple"> make this world a better place </b>
              </i>in a way, alongside people who share the same passion.

              <br />
              <br />
              I have over <b className="purple">seven years of extensive experience</b> in web development, using
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; working on both
              <i>
                <b className="purple"> Front end and Backend</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <img src={myImg1} className="img-fluid" alt="avatar" style={{ borderRadius: "50%", border: "5px solid #555" }} />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>REACH OUT</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me on
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/yeruham58"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/yair-landau-51232717a/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
