import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Jangir </span>
            from <span className="purple"> Nagpur, India.</span>
            <br />I am a computer science engineering student at Shri Ramdeo Baba College of engineering and management, Nagpur.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing badminton 🏸, football ⚽.
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting 🖌️.
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🗺️🧭.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Chess.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Finding reason behing everything and asking "Why?" can lead to big diffrence."{" "}
          </p>
          <footer className="blockquote-footer">jatin jangir</footer>
        </blockquote>
      </Card.Body>
    </Card> 
  );
}

export default AboutCard;
