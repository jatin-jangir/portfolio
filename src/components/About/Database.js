import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiMongodb,
} from "react-icons/di";
import {
    SiMysql,
    SiPostgresql,
} from "react-icons/si";

function Database() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
        </Row>
    );
}

export default Database;
