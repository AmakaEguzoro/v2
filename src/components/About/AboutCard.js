import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eguzoro Chimamaka </span>
            currently in <span className="purple"> Lagos, Nigeria.</span>
            <br />I am a Systems Engineering student at the University of Lagos
            and a self-taught Frontend Developer.
            <br />
            <br />
            When I'm not coding, you would most likely find me:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Spending time with Loved ones
            </li>
            <li className="about-activity">
              <ImPointRight /> Performing selfcare
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Dedication coupled with a working computer and internet connection
            is all you need to take your tech career to the next level!"{" "}
          </p>
          <footer className="blockquote-footer">Chimamaka</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
