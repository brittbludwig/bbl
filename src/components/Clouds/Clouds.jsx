import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import { sections } from "../../static/labels/labels";
import cloudLeft from "../../static/images/cloud-left.png";
import cloudRight from "../../static/images/cloud-right.png";

const Clouds = ({ anchor }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);
  const cloudImg = anchor === "left" ? cloudLeft : cloudRight;

  useEffect(() => {
    setActiveSection(activeSection === sections.section3);
  }, [activeSection]);

  return (
    <div
      className={`Clouds Clouds--${anchor} ${isActiveSection ? `active` : ``}`}
    >
      <img src={cloudImg} className="Clouds__img" alt="cloud" />
    </div>
  );
};

Clouds.defaultProps = {
  anchor: "",
};

Clouds.propTypes = {
  anchor: PropTypes.string,
};

export default Clouds;
