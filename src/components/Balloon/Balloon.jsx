import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { images } from "../../static/constants/constants";
//import balloon from '../../static/images/balloon.png';

const Balloon = ({ id }) => {
  const image = "balloon";
  const anchor = "left";
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(true);
  const imgUrl = images[image].location;
  const imgName = images[image].name;

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  const imgClasses = `${imgName} ${anchor ? `${imgName}--${anchor}` : ""} ${
    isActiveSection ? "active" : ""
  }`;

  return (
    <div className={imgClasses}>
      <img src={imgUrl} className={`${imgName}__img`} alt={imgName} />
    </div>
  );
};

Balloon.defaultProps = {
  id: "",
};

Balloon.propTypes = {
  id: PropTypes.string,
};

export default Balloon;
