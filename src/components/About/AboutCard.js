import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            With over seven years of comprehensive web development experience, specializing in both front-end and back-end technologies, I hope I have learned something.
            <br />
            <br />
            At Kinsta, where I served as a JavaScript Developer and Team Lead,
            I spearheaded the creation and management of sophisticated communication tools for both internal and external use, greatly improving system functionality and customer engagement.
            <br />
            <br />
            My technical proficiency includes modern frameworks and technologies such as React, Node.js, TypeScript, and GraphQL, along with extensive experience working with databases like MySQL, PostgreSQL, and MongoDB.
            <br />
            <br />
            I am dedicated to developing efficient, scalable solutions and enhancing user experiences through innovative and thoughtful development practices.
            <br />
            <br />
            <br />
            {/* Apart from coding, Is that interesting? <b className="purple">(Yes, it is!)</b> */}
          </p>


          {/* <ul>
            <li className="about-activity">
              Hang out with family and friends
            </li>
            <li className="about-activity">
              Travelling around the world
            </li>
            <li className="about-activity">
              Enjoy nature
            </li>
            <li className="about-activity">
              Play and listen to music
            </li>
          </ul> */}

          <p style={{ color: "#179635" }}>
            "Love what you do and do what you love. Passion is the key that opens the door to joy and abundance."{" "}
          </p>
          <footer className="blockquote-footer">David Cuschieri</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
