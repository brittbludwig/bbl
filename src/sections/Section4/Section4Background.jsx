import React from "react";
import PropTypes from "prop-types";
import Balloon from "../../components/Balloon/Balloon";
import Clouds from "../../components/Clouds/Clouds";

const Section4Background = ({ id }) => {
  return (
    <div className="Section4__background">
      <Clouds anchor="left" id={id} />
      <Balloon id={id} />
    </div>
  );
};

Section4Background.defaultProps = {
  id: "",
};

Section4Background.propTypes = {
  id: PropTypes.string,
};

export default Section4Background;
