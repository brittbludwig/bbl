import React from "react";
import PropTypes from "prop-types";
import Clouds from "../../components/Clouds/Clouds";
import Plane from "../../components/Plane/Plane";

const Section3Background = ({ id }) => {
  return (
    <div className="Section3__background">
      <Clouds anchor="left" id={id} />
      <Clouds anchor="right" id={id} />
      <Plane id={id} />
    </div>
  );
};

Section3Background.defaultProps = {
  id: "",
};

Section3Background.propTypes = {
  id: PropTypes.string,
};

export default Section3Background;
