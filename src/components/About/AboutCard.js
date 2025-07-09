import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> KALLA NAVYA </span> 
            from <span className="purple"> Visakhapatnam, Andhra Pradesh </span>.
            <br />
            I am currently interning as a <span className="purple"> Full Stack Developer Intern </span> 
            at <span className="purple"> Aptitude Guru Hem </span>.
            <br />
            I am pursuing <span className="purple">BTech</span> final year in <span className="purple"> Information Technology </span> 
            at Vignan's Institute of Engineering for Women.
            <br />
            <br />
            Here are some activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in Coding Challenges
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies and Building Projects
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive for progress, not perfection!"{" "}
          </p>
          <footer className="blockquote-footer">Navya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
