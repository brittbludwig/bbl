import React from "react";
import PropTypes from "prop-types";
import Stars from "../../components/Stars/Stars";

const Section1Background = ({ id }) => {
  return (
    <div className="Section1__background">
      <Stars position="primary" id={id} />
    </div>
  );
};

Section1Background.defaultProps = {
  id: "",
};

Section1Background.propTypes = {
  id: PropTypes.string,
};

export default Section1Background;
