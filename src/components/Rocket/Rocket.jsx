import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import rocket from "../../static/images/rocket.png";

const Rocket = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(true);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Rocket ${isActiveSection ? "active" : ""}`}>
      <img src={rocket} className="Rocket__img" alt="rocket" />
    </div>
  );
};

Rocket.defaultProps = {
  id: "",
};

Rocket.propTypes = {
  id: PropTypes.string,
};

export default Rocket;
