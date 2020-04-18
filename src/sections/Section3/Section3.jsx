import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Section3Background from "../../sections/Section3/Section3Background";
import Filter from "../../components/Filter/Filter";
import SkillBox from "../../components/SkillBox/SkillBox";

const Section3 = ({
  sectionHeader,
  sectionContent,
  sectionId,
  filterHeader,
}) => {
  return (
    <div className="Section3" id={sectionId}>
      <Section3Background />
      <Container className="h-100 Section3__container">
        <Row className="align-items-center justify-content-center h-100">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs={12}
          >
            <div className="Section3__content">
              <SkillBox header={sectionHeader} skills={sectionContent} />
              <Filter header={filterHeader} skills={sectionContent} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Section3.defaultProps = {
  sectionHeader: "",
  sectionContent: [],
  sectionId: "",
  fieldContent: "",
};

Section3.propTypes = {
  sectionHeader: PropTypes.string,
  sectionContent: PropTypes.array,
  sectionId: PropTypes.string,
  fieldContent: PropTypes.string,
};

export default Section3;
