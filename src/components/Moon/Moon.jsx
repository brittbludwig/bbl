import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import moon from "../../static/images/moon.png";

const Moon = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className="Moon">
      <img
        src={moon}
        className={`Moon__img ${isActiveSection ? `active` : ``}`}
        alt="moon"
      />
    </div>
  );
};

Moon.defaultProps = {
  id: "",
};

Moon.propTypes = {
  id: PropTypes.string,
};

export default Moon;
