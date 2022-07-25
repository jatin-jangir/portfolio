import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGeeksforgeeks,
  SiCodechef,
  SiLeetcode,
  SiHackerrank,

} from "react-icons/si";

function CodingPlatforms() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiLeetcode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGeeksforgeeks />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHackerrank />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodechef />
      </Col>
    </Row>
  );
}

export default CodingPlatforms;
