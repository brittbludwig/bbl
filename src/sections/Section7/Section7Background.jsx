import React from "react";
import PropTypes from "prop-types";
import Seaweed from "../../components/Seaweed/Seaweed";
import Seaweed2 from "../../components/Seaweed2/Seaweed2";
import Seaweed3 from "../../components/Seaweed3/Seaweed3";
import Seaweed4 from "../../components/Seaweed4/Seaweed4";
import Sign from "../../components/Sign/Sign";
import Submarine from "../../components/Submarine/Submarine";

const Section7Background = ({ id }) => {
  return (
    <div className="Section7__background">
      <Submarine id={id} />
      <Seaweed />
      <Seaweed2 />
      <Seaweed3 />
      <Seaweed4 />
      <Sign />
    </div>
  );
};

Section7Background.defaultProps = {
  id: "",
};

Section7Background.propTypes = {
  id: PropTypes.string,
};

export default Section7Background;
