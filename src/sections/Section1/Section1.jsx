import React from "react";
import { Container, Row, Col } from "reactstrap";
import Section1Background from "../../sections/Section1/Section1Background";
import Moon from "../../components/Moon/Moon";

const Section1 = () => {
  return (
    <div className="Section1">
      <Section1Background />
      <Container>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}>
            <Moon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
