import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              ABOUT <span className="purple"> ME </span>
            </h1>

            <p className="home-about-body">
              Hi! I'm a passionate
              <b className="purple"> Junior QA Engineer </b>
              focused on ensuring software quality, reliability, and smooth user experiences.
              <br />
              <br />
              I specialize in
              <i>
                <b className="purple">
                  {" "}Manual Testing, Functional Testing, Regression Testing, API Testing,
                  and Bug Reporting
                </b>
              </i>
              .
              <br />
              <br />
              My interest lies in testing and improving
              <i>
                <b className="purple">
                  {" "}Web Applications, Mobile Applications, and Digital Payment Systems
                </b>
              </i>
              , ensuring they meet high-quality standards before release.
              <br />
              <br />
              Currently, I am working at
              <b className="purple"> Namaste Pay</b>, where I collaborate with developers,
              product managers, and designers to deliver reliable and user-friendly products.
              <br />
              <br />
              I am continuously learning and improving my skills in
              <i>
                <b className="purple">
                  {" "}Test Automation, API Testing, Performance Testing, and QA Best Practices
                </b>
              </i>{" "}
              to grow as a professional QA Engineer.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ marginTop: "-70px" }}
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/nibesh0506"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/nibesh-upadhyaya/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.instagram.com/n.i.b.e.s.h"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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