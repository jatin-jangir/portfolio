import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillCode,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer">
          <h3>Portfolio of Jatin Subhashchandra Jangir</h3>
        </Col>
        
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/jatin-jangir"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/JatinJangir0220"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/jatin-jangir-1973631b5/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
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
  );
}

export default Footer;
