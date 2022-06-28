import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/Untitled_design__4_-removebg-preview.png";
import editor from "../../Assets/Projects/Untitled_design__3_-removebg-preview.png";
import chatify from "../../Assets/Projects/Untitled_design__2_-removebg-preview.png";
import suicide from "../../Assets/Projects/Untitled_design__5_-removebg-preview.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some side projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Planwella"
              description="A Finance Planing App That Helps You Track Your Income And Expense At The Click Of A Button. This Web Application Is Powered By Speechly (Which Makes It Speech To Text)."
              ghLink="https://github.com/AmakaEguzoro/planWella"
              demoLink="https://plan-wella.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Nace Admin"
              description="An Administrative Dashboard That Shows Most Important Features In React. From API Calls To Proper Grid Display And Routing."
              ghLink="https://github.com/AmakaEguzoro/nace-admin-site"
              demoLink="https://nace-admin-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Search Coin"
              description="This React Application Allows Nigerian Users To View Various Coin Prices By Calling An End Point And Converting To Naira."
              ghLink="https://github.com/AmakaEguzoro/crypto-search"
              demoLink="https://search-coin.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Credit Card Validation App"
              description="This Application Validates Credit Cards, Identifies If It Is A Mastercard, Visa Or Verve Card"
              ghLink="https://github.com/AmakaEguzoro/CreditCard"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
