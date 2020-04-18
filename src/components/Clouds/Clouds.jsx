import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import cloudLeft from "../../static/images/cloud-left.png";
import cloudRight from "../../static/images/cloud-right.png";

const Clouds = ({ anchor, id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [animationStatus, setAnimationStatus] = useState(false);
  const cloudImg = anchor === "left" ? cloudLeft : cloudRight;

  useEffect(() => {
    if (animationStatus) return;
    if (activeSection === id && !animationStatus) {
      setAnimationStatus(true);
    }
  }, [activeSection, animationStatus, id]);

  return (
    <div
      className={`Clouds Clouds--${anchor} ${animationStatus ? `active` : ``}`}
    >
      <img src={cloudImg} className="Clouds__img" alt="cloud" />
    </div>
  );
};

Clouds.defaultProps = {
  anchor: "",
  id: "",
};

Clouds.propTypes = {
  anchor: PropTypes.string,
  id: PropTypes.string,
};

export default Clouds;
