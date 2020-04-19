import React from "react";
import PropTypes from "prop-types";
import Hills from "../../components/Hills/Hills";
import Sun from "../../components/Sun/Sun";
import Birds from "../../components/Birds/Birds";

const Section5Background = ({ id }) => {
  return (
    <div className="Section5__background">
      <Hills anchor="right" id={id} />
      <Hills anchor="left" id={id} />
      <Sun id={id} />
      <Birds id={id} />
    </div>
  );
};

Section5Background.defaultProps = {
  id: "",
};

Section5Background.propTypes = {
  id: PropTypes.string,
};

export default Section5Background;
