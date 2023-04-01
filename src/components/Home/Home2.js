import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

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
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> JAVA , Javascript and Python. </b>
              </i>
              <br />
              <br />
              I am a DevOps intern with a passion for building efficient and scalable infrastructure. My interest in technology and software engineering led me to pursue a career in DevOps, and I am excited to showcase some of the projects I have worked on during my internship.
              <br />
              <br />
              As a DevOps intern, I have had the opportunity to work with various tools and technologies such as 
              <i>
                <b className="purple">Docker, Kubernetes, Jenkins, AWS, and Terraform. </b>
              </i>
                Throughout my internship, I have focused on improving the deployment process, reducing downtime, and implementing automation to streamline operations.
              <br />
              <br />
              In this portfolio, you will find examples of my work on DevOps projects, including infrastructure automation, continuous integration and deployment, and monitoring and troubleshooting. I am constantly learning and striving to improve my skills, and I am excited to continue my journey as a DevOps engineer.
              <br />
              <br />
              <i>
                <b className="purple">
                      Thank you for taking the time to visit my portfolio, and please feel free to contact me if you have any questions or would like to discuss potential opportunities.
                </b>
              </i>
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
                  href="https://github.com/jatin-jangir"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/JatinJangir0220"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jatin-jangir-1973631b5/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <AiFillCode />
            <li className="social-icons">
              <a
                href="https://leetcode.com/jangirjs/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <p>Leet-code</p>

              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/jangirjs"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <p>hacker-rank</p>
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
