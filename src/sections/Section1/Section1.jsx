import React from "react";
import { Container, Row, Col } from "reactstrap";
import content from "../../static/content/content";
import Section1Background from "../../sections/Section1/Section1Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import Moon from "../../components/Moon/Moon";

const Section1 = () => {
  const sectionContent = content[0].content;

  return (
    <div className="Section1">
      <Section1Background />
      <Container className="h-100">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            xs={12}
            md={8}
            lg={6}
            className="Section1__column d-flex align-items-center justify-content-center"
          >
            <ContentBox content={sectionContent} />
          </Col>
          <Col
            xs={12}
            md={4}
            lg={6}
            className="Section1__column d-flex align-items-end justify-content-end"
          >
            <Moon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
