import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.webp";
import Tilt from "react-parallax-tilt";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm Navya Kalla, a passionate <b className="purple">Full Stack Developer</b>.
              <br />
              <br />
              I'm skilled in
              <i>
                <b className="purple"> HTML, CSS, JavaScript, React.js, and Node.js. </b>
              </i>
              Additionally, I have hands-on experience with backend technologies like
              <b className="purple"> Express, MongoDB, and SQLite. </b>
              <br />
              <br />
              My interests lie in creating innovative web technologies and solutions, particularly in
              <b className="purple"> e-commerce platforms and user-focused applications.</b>
              <br />
              <br />
              I've contributed to projects like{" "}
              <i>
                <b className="purple">Nxt Trendz</b> (an Amazon/Flipkart clone) and <b className="purple">TechRitz</b>.
              </i>
              Whenever possible, I love diving deep into
              <b className="purple"> full-stack development</b> to bring ideas to life.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid rounded-circle"
                alt="avatar"
                style={{ width: "300px", height: "300px", objectFit: "cover" }}
              />
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
                  href="https://github.com/navya1220"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/navya-kalla/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://codolio.com/profile/NavyaKalla"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BiWorld />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/navya-kalla/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.codechef.com/users/navya1220"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiCodechef />
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
