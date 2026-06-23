import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Nibesh Upadhyaya</span> from
            <span className="purple"> Kathmandu, Nepal</span>.
            <br />
            <br />
            Currently working as a <span className="purple">Junior QA Engineer at Namaste Pay</span>,
            where I contribute to ensuring the quality, reliability, and performance
            of digital payment solutions. My responsibilities include manual testing,
            test case creation, bug reporting, regression testing, and collaborating
            closely with developers to deliver high-quality products.
            <br />
            <br />
            I hold a Bachelor's degree in Information Management (BIM) from
            <span className="purple"> Shanker Dev Campus</span>.
            <br />
            <br />
            I am passionate about software quality, continuous learning, and
            exploring modern testing practices to build seamless user experiences.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring Software Testing & QA Tools
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Test Automation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Documentation
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling & Discovering New Places
            </li>
          </ul>

          <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
            "Quality is never an accident; it is always the result of intelligent effort."
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;