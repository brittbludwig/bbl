import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { store } from "../../store/store";
import plane from "../../static/images/plane.png";

const Plane = ({ id }) => {
  const globalState = useContext(store);
  const activeSection = globalState.state.activeSection;
  const [isActiveSection, setActiveSection] = useState(false);

  useEffect(() => {
    setActiveSection(activeSection === id);
  }, [activeSection, id]);

  return (
    <div className={`Plane ${isActiveSection ? `active` : ``}`}>
      <img src={plane} className="Plane__img" alt="plane" />
    </div>
  );
};

Plane.defaultProps = {
  id: "",
};

Plane.propTypes = {
  id: PropTypes.string,
};

export default Plane;
