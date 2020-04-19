import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { images } from "../../static/constants/constants";

const Image = ({ id, image, anchor }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);
  const [animationStatus, setAnimationStatus] = useState(false);
  const imgUrl = images[image].location;
  const imgName = images[image].name;
  const loop = images[image].loop;

  useEffect(() => {
    setActiveSection(activeSection === id);
    setAnimationStatus(loop);
  }, [activeSection, animationStatus, id, loop]);

  const imgClasses = `${imgName} ${anchor ? `${imgName}--${anchor}` : ""} ${
    isActiveSection || !animationStatus ? "active" : ""
  }`;

  return (
    <div className={imgClasses}>
      <img src={imgUrl} className={`${imgName}__img`} alt={imgName} />
    </div>
  );
};

Image.defaultProps = {
  id: "",
  image: "",
  anchor: "",
};

Image.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  anchor: PropTypes.string,
};

export default Image;
