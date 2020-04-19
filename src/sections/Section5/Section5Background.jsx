import React from "react";
import PropTypes from "prop-types";
import Image from "../../components/Image/Image";
import Hills from "../../components/Hills/Hills";
import Sun from "../../components/Sun/Sun";
import Birds from "../../components/Birds/Birds";

const Section5Background = ({ id }) => {
  return (
    <div className="Section5__background">
      {/* <Hills anchor="right" id={id} />
      <Hills anchor="left" id={id} /> 
      <Sun id={id} />
      <Birds id={id} />*/}
      <Image anchor="right" image={"hillRight"} id={id} loop={false} />
      <Image anchor="left" image={"hillLeft"} id={id} loop={false} />
      <Image image={"sun"} id={id} />
      <Image image={"birds"} id={id} />
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
