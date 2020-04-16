import React from "react";
import { Container, Row, Col } from "reactstrap";
import content from "../../static/content/content";
import Section2Background from "../../sections/Section2/Section2Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import FieldBox from "../../components/FieldBox/FieldBox";

const Section2 = () => {
  const sectionHeader = content[1].header;
  const sectionContent = content[1].resume;
  const sectionId = content[1].id;
  const fieldContent = content[1].formText;

  return (
    <div className="Section2" id="section2">
      <Section2Background />
      <Container className="h-100 Section2__container">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            xs={12}
            lg={7}
            className="d-flex 
              align-items-center 
              justify-content-center
              order-1
              order-lg-2 
              Section2__column"
          >
            <div className="Section2__content">
              <ContentBox header={sectionHeader} content={sectionContent} />
            </div>
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-flex 
              align-items-center  
              justify-content-end
              flex-column 
              order-2
              order-lg-1
              Section2__column"
          >
            <div className="Section2__field">
              <FieldBox fieldText={fieldContent} section={sectionId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Section2;
