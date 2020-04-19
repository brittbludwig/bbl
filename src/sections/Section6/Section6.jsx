import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Section6Background from "../../sections/Section6/Section6Background";
import Links from "../../components/Links/Links";
import FieldBox from "../../components/FieldBox/FieldBox";

const Section6 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  fieldContent,
}) => {
  return (
    <div className="Section6" id={sectionId}>
      <Section6Background id={sectionId} />
      <Container className="h-100 Section6__container">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            xs={12}
            lg={7}
            className="d-flex 
              align-items-center
              justify-content-center
              order-lg-2
              Section6__column"
          >
            <div className="Section6__content">
              <Links header={sectionHeader} content={sectionContent} />
            </div>
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-flex 
              align-items-center
              justify-content-center
              order-lg-1
              Section6__column"
          >
            <div className="Section6__field">
              <FieldBox fieldText={fieldContent} section={sectionId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section6.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
  fieldContent: "",
};

Section6.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
  fieldContent: PropTypes.string,
};

export default Section6;
