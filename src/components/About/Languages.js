import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiNodejs,
    DiPython,
    DiJava,
    DiHtml5,
    DiCss3,
} from "react-icons/di";
import {
    SiGoland,
    SiGnubash,
} from "react-icons/si";

function Languages() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGoland />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGnubash />
            </Col>
        </Row>
    );
}

export default Languages;
