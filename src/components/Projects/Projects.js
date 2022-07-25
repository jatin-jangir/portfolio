import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import snake from "../../Assets/Projects/snake.PNG";
import os from "../../Assets/Projects/os.png";
import bigData from "../../Assets/Projects/unnamed.jpg";
import game from "../../Assets/Projects/2048.png";
import pathFinder from "../../Assets/Projects/ai.PNG";
import library from "../../Assets/Projects/library.png";
import webScrapping from "../../Assets/Projects/news.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pathFinder}
              isBlog={false}
              title="AI Algorithms Visualiser"
              description="Visual representation of different AI algorithms like A*, Best First Search, Breath First Search, Dijastra's Algorithm, Bi-Directional Search, Best Path between 3 points and Closest Points. "
              link="https://github.com/jatin-jangir/AI-path-finder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webScrapping}
              isBlog={false}
              title="WebScrapping on News Papers"
              description="A web scrapping project using flask and beautifulSoup4. This project is based on web scapping of news channel to get news of particular topic."
              link="https://github.com/jatin-jangir/webScrapping"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={game}
              isBlog={false}
              title="2048 Game_AI_hillclimbing"
              description="Artificial Intelligence help us to play 2048 game. I have used hill climbing using an evaluation function.The 2048 game is invented by gabriele cirulli. this game work around the concept of adding numbers to reach particular number that is 2048."
              link="https://github.com/jatin-jangir/2048Game_AI_hillclimbing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Simple Snake Game"
              description="Play simple snake game and score highest points. This is made using HTML, CSS and Java-Script "
              link="https://github.com/jatin-jangir/JavaScript/tree/main/SnakeGame"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={os}
              isBlog={false}
              title="Operating System Algorthims"
              description="Stimulation of many diffrent algorithm use in operating system like process scheduling, resource allocation, paging and segmentation."
              link="https://github.com/jatin-jangir/OS_ALGOS"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={library}
              isBlog={false}
              title="Library management system."
              description="Using Core JAVA, JDBC and SQL we can implement library management system. "
              link="https://github.com/jatin-jangir/LibraryManagement"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bigData}
              isBlog={false}
              title="Big Data Analysis on Epidemic Data (Machine Learning on COVID-19)"
              description=" Technology: Python, PySpark,
              Fbprophet, API, PHP, HTML and CSS.
              Using Machine Learning Algorithm on historic data we can predict outcomes like number of deaths, new patients in particular
              area. These demo-graphical information is showed on web-page using PHP."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
