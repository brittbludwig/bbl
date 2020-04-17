import React from "react";
import { Container, Row, Col } from "reactstrap";

import Section1Background from "../../sections/Section1/Section1Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import FieldBox from "../../components/FieldBox/FieldBox";
import Moon from "../../components/Moon/Moon";

const Section1 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  fieldContent,
}) => {
  return (
    <div className="Section1" id={sectionId}>
      <Section1Background />
      <Container className="h-100 Section1__container">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            xs={12}
            lg={6}
            className="d-flex 
              align-items-center 
              align-items-lg-start 
              justify-content-center 
              flex-column 
              order-2 
              order-lg-1 
              Section1__column"
          >
            <div className="Section1__content">
              <ContentBox header={sectionHeader} content={sectionContent} />
            </div>
            <div className="Section1__field">
              <FieldBox fieldText={fieldContent} section={sectionId} />
            </div>
          </Col>
          <Col
            xs={12}
            lg={6}
            className="d-flex 
              align-items-end 
              justify-content-end 
              order-1 
              order-lg-2 
              Section1__column"
          >
            <Moon />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section1;
