import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/second-girl.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A LITTLE <span className="purple"> INTRODUCTION </span> OF MYSELF
            </h1>
            <p className="home-about-body">
              I love to solve problems, so programming is my safe haven, I
              think… 🤷‍♀️
              <br />
              <br />I am fluent in JavaScript and frameworks & libraries like
              <i>
                <b className="purple"> React and Angular. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Responsive Web Applications, </b> I am
                presently participating in TECH4DEV Women Techster Fellowship
                class of 2023{" "}
                <b className="purple"> Web 3.0 and Blockchain track.</b>
              </i>
              <br />
              <br />
              Whenever possible, I encourage young people especially girls in
              Nigeria to consider tech as a career path by{" "}
              <b className="purple">
                creating tech related contents on instagram
              </b>{" "}
              and
              <i>
                <b className="purple"> Volunteering in Tech related events</b>
              </i>
              {/* &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AmakaEguzoro"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://mailto:eguzoroa@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/chimamaka-eguzoro-4906791a0"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/techwithnace/"
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
