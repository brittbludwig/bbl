import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Section4Background from "../../sections/Section4/Section4Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import FieldBox from "../../components/FieldBox/FieldBox";

const Section4 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  fieldContent,
}) => {
  return (
    <div className="Section4" id={sectionId}>
      <Section4Background id={sectionId} />
      <Container className="h-100 Section4__container">
        <Row className="align-items-center align-items-lg-start justify-content-center h-100">
          <Col
            xs={12}
            lg={7}
            className="d-flex 
              align-items-center 
              justify-content-center
              justify-content-lg-end
              order-1
              order-lg-2 
              flex-column
              flex-lg-row
              Section4__column"
          >
            <div className="Section4__content">
              <ContentBox header={sectionHeader} content={sectionContent} />
            </div>
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-flex 
              align-items-center 
              align-items-lg-end 
              justify-content-center
              justify-content-lg-start
              order-2
              order-lg-1
              flex-column
              flex-lg-row
              Section4__column"
          >
            <div className="Section4__field">
              <FieldBox fieldText={fieldContent} section={sectionId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section4.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
  fieldContent: "",
};

Section4.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
  fieldContent: PropTypes.string,
};

export default Section4;
