import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Section5Background from "../../sections/Section5/Section5Background";
import ContentBox from "../../components/ContentBox/ContentBox";
import FieldBox from "../../components/FieldBox/FieldBox";
import Headshot from "../../components/Headshot/Headshot";

const Section5 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  fieldContent,
}) => {
  return (
    <div className="Section5" id={sectionId}>
      <Section5Background id={sectionId} />
      <Container className="h-100 Section5__container">
        <Row className="align-items-center align-items-lg-start justify-content-center h-100">
          <Col
            xs={12}
            lg={7}
            className="d-flex 
              align-items-center
              justify-content-start
              flex-column
              flex-lg-row
              Section5__column"
          >
            <div className="Section5__content">
              <ContentBox header={sectionHeader} content={sectionContent} />
              <Headshot id={sectionId} />
            </div>
          </Col>
          <Col
            xs={12}
            lg={5}
            className="d-flex 
              align-items-center
              align-items-lg-end
              justify-content-center
              flex-column
              flex-lg-row
              Section5__column"
          >
            <div className="Section5__field">
              <FieldBox fieldText={fieldContent} section={sectionId} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section5.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
  fieldContent: "",
};

Section5.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
  fieldContent: PropTypes.string,
};

export default Section5;
