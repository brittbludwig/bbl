import React from "react";
import PropTypes from "prop-types";
import Bass from "../../components/Bass/Bass";
import Fish from "../../components/Fish/Fish";
import Trout from "../../components/Trout/Trout";
import Turtle from "../../components/Turtle/Turtle";

const Section6Background = ({ id }) => {
  return (
    <div className="Section6__background">
      <Bass id={id} />
      <Fish id={id} />
      <Trout id={id} />
      <Turtle id={id} />
    </div>
  );
};

Section6Background.defaultProps = {
  id: "",
};

Section6Background.propTypes = {
  id: PropTypes.string,
};

export default Section6Background;
