import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Interweave from "interweave";
import Logos from "../../components/Logos/Logos";

const Links = ({ header, content }) => {
  let template = [];
  let links = [];

  content.forEach((item) => {
    let block = "";
    block = `${block}<a href=${item.url} target="_blank">${item.title}</span>`;
    template.push(block);
    links.push(item.url);
  });

  return (
    <div className="Links">
      <h2>{header}</h2>
      <Container>
        <Row>
          <Col xs={12} md={9} className="p-0">
            {template.map((item, index) => {
              return <Interweave key={index} content={item} />;
            })}
          </Col>
          <Col xs={12} md={3} className="p-0">
            <Logos links={links} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Links.defaultProps = {
  header: "",
  content: [],
};

Links.propTypes = {
  header: PropTypes.string,
  content: PropTypes.array,
};

export default Links;
