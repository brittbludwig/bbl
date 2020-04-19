import React from "react";
import PropTypes from "prop-types";
import Stars from "../../components/Stars/Stars";
import Rocket from "../../components/Rocket/Rocket";

const Section2Background = ({ id }) => {
  return (
    <div className="Section2__background">
      <Stars position="secondary" />
      <Rocket id={id} />
    </div>
  );
};

Section2Background.defaultProps = {
  id: "",
};

Section2Background.propTypes = {
  id: PropTypes.string,
};

export default Section2Background;
