import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Section2Background from "../../sections/Section2/Section2Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import FieldBox from "../../components/FieldBox/FieldBox";

const Section2 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  fieldContent,
}) => {
  return (
    <div className="Section2" id={sectionId}>
      <Section2Background id={sectionId} />
      <Container className="h-100 Section2__container">
        <Row className="align-items-center justify-content-center h-100">
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
              justify-content-center
              justify-content-lg-end
              order-2
              order-lg-1
              flex-column
              flex-lg-row
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

Section2.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
  fieldContent: "",
};

Section2.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
  fieldContent: PropTypes.string,
};

export default Section2;
