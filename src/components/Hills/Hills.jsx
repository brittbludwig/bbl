import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import hillLeft from "../../static/images/hill-left.png";
import hillRight from "../../static/images/hill-right.png";

const Hills = ({ anchor, id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [animationStatus, setAnimationStatus] = useState(false);
  const hillImg = anchor === "left" ? hillLeft : hillRight;

  useEffect(() => {
    if (animationStatus) return;
    if (activeSection === id && !animationStatus) {
      setAnimationStatus(true);
    }
  }, [activeSection, animationStatus, id]);

  return (
    <div
      className={`Hills Hills--${anchor} ${animationStatus ? `active` : ``}`}
    >
      <img src={hillImg} className="Hills__img" alt="hill" />
    </div>
  );
};

Hills.defaultProps = {
  anchor: "",
  id: "",
};

Hills.propTypes = {
  anchor: PropTypes.string,
  id: PropTypes.string,
};

export default Hills;
