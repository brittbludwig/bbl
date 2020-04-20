import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { footer } from "../../static/labels/labels";
import Section7Background from "../../sections/Section7/Section7Background";
import Contact from "../../components/Contact/Contact";

const Section7 = ({ sectionHeader, sectionContent, sectionId }) => {
  return (
    <div className="Section7" id={sectionId}>
      <Section7Background id={sectionId} />
      <Container className="h-100 Section7__container">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            xs={12}
            className="d-flex 
              align-items-center
              justify-content-center
              Section7__column"
          >
            <Contact header={sectionHeader} content={sectionContent} />
          </Col>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col
            xs={12}
            className="
              Section7__footer"
          >
            {footer.copyright}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section7.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
};

Section7.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
};

export default Section7;
