import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import sun from "../../static/images/sun.png";

const Sun = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Sun ${isActiveSection ? `active` : ``}`}>
      <img src={sun} className="Sun__img" alt="sun" />
    </div>
  );
};

Sun.defaultProps = {
  id: "",
};

Sun.propTypes = {
  id: PropTypes.string,
};

export default Sun;
